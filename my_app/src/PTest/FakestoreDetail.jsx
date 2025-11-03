import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function FakestoreDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  
  
}