<?php
// DB 연결이 들어있는 config의 database.php를 포함
include '../config/database.php';

// ---------------------------
// 클라이언트에서 보낸 JSON 데이터 읽기
// ---------------------------
$data = json_decode(file_get_contents("php://input"), true);

// ---------------------------
// 데이터 유효성 체크
// ---------------------------
if (!$data || !isset($data['userid'], $data['userpw'])) {
    echo json_encode([
        "status" => "fail",
        "message" => "아이디와 비밀번호를 입력해주세요."
    ]);
    exit;
}

// ---------------------------
// 입력 데이터 변수에 저장
// ---------------------------
$userid = $data['userid'];
$userpw = $data['userpw'];

// 빈 값 체크
if (empty($userid) || empty($userpw)) {
    echo json_encode([
        "status" => "fail",
        "message" => "아이디와 비밀번호를 모두 입력해주세요."
    ]);
    exit;
}

// ---------------------------
// Prepared Statement를 사용한 안전한 SELECT
// ---------------------------
$sql = "SELECT userid, username FROM users WHERE userid=? AND userpw=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $userid, $userpw);

// ---------------------------
// 실행 후 결과 확인
// ---------------------------
$stmt->execute();
$result = $stmt->get_result();

$response = [];

if ($result->num_rows > 0) {
    // 로그인 성공
    $user = $result->fetch_assoc();
    $response["status"] = "success";
    $response["message"] = "로그인 성공!";
    $response["user"] = [
        "userid" => $user['userid'],
        "username" => $user['username']
    ];
} else {
    // 로그인 실패
    $response["status"] = "fail";
    $response["message"] = "아이디 또는 비밀번호가 일치하지 않습니다.";
}

// ---------------------------
// 클라이언트에게 JSON으로 결과 전송
// ---------------------------
echo json_encode($response);

// ---------------------------
// 사용한 Statement와 DB 연결 종료
// ---------------------------
$stmt->close();
$conn->close();
?>