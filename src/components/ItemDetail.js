import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import './ItemDetail.css';
import './Itemdetail.css';

const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      })
      .catch((error) => {
        console.error('Error fetching item details:', error);
      });
  }, [id]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="item-detail">
      <h1>Social Media App</h1>
      <img src={`https://picsum.photos/200?random=${item.id}`} alt={`Item ${item.id}`} />
      <div className="item-info">
        <h2>Item Detail</h2>
        <p>ID: {id}</p>
        <h3>Title: {item.title}</h3>
        <p2>Body: {item.body}</p2>
      </div>
    </div>
  );
};

export default ItemDetail;




