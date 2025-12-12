import React from 'react';


const Course = () => {
  // Sample course data (replace with real data from props, state, or API)
  const courses = [
    {
      id: 1,
      title: 'React Basics',
      price: '$49.99',
      image: 'https://via.placeholder.com/300x200?text=React+Basics', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Advanced JavaScript',
      price: '$79.99',
      image: 'https://via.placeholder.com/300x200?text=Advanced+JS',
    },
    {
      id: 3,
      title: 'UI/UX Design',
      price: '$59.99',
      image: 'https://via.placeholder.com/300x200?text=UI+UX',
    },
  ];

  const handleBuyNow = (courseId) => {
    // Handle the buy action (e.g., redirect to payment page or add to cart)
    alert(`Buying course with ID: ${courseId}`);
  };

  return (
    <div className="course-container">
      <h1>Our Courses</h1>
      <div className="course-grid">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <h3 className="course-title">{course.title}</h3>
            <p className="course-price">{course.price}</p>
            <button 
              className="buy-now-btn" 
              onClick={() => handleBuyNow(course.id)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;