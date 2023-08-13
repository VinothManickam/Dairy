import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Menu, Button, Card } from 'antd';
import { HomeOutlined, StarOutlined, MessageOutlined } from '@mui/icons-material';
import { SettingOutlined } from "@ant-design/icons"; // Import the SettingOutlined icon
import './App.css';

function App() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    // Make an API request to your Flask backend here
    axios.get('http://127.0.0.1:5000/api/posts/company_a')  // Replace 'company_a' with the desired company name
      .then(response => {
        setBlogData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="app-container">
      <div className="left-side">
        <Menu
          items={[
            { label: 'Home', icon: <HomeOutlined /> },
            { label: 'DiaryBlog Admin', icon: <StarOutlined /> },
            { label: 'Typelt Admin', icon: <MessageOutlined /> },
            { label: 'Settings', icon: <SettingOutlined /> },
          ]}
        ></Menu>
      </div>
      <form>
      <div class="content row"> 
        <h1>Web Components That Just Works.</h1>
        <p>Welcome to our online store!</p>  
      </div>
      <br />
      <div class="row">
      <Button className="create-blog-button">CREATE NEW BLOG SPACE</Button>
      <h1 className="blog-heading">My Blog Spaces</h1>
    </div>
        <div className="card-container">
          {blogData.map(blog => (
            <Card key={blog.id} className="blog-card">
              <h2>{blog.title}</h2>
              <p>{blog.content}</p>
            </Card>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
