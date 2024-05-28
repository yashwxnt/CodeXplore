export const courses = [
  // Web Development Courses
  {
    courseName: 'React for Beginners',
    description: 'Learn the basics of React and build your first application.',
    courseImage: '',
    courseId: 'react-for-beginners',
    courseDuration: '6 weeks',
    courseRating: 4.5,
    courseCategory: 'Web Development',
    difficulty: 'Beginner',
    courseTags: ['JavaScript', 'React'],
    chapters: [
      {
        chapterName: 'Chapter 1: Introduction to React',
        content: 'Learn about the basics of React and why it is popular.',
        topics: [
          { topicName: 'What is React? 15 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'History of React 10 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Why use React? 20 min', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Chapter 2: Components and Props',
        content: 'Understand components and how to use props in React.',
        topics: [
          { topicName: 'Functional Components 30 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Class Components 25 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Using Props 35 min', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Chapter 3: State and Lifecycle',
        content: 'Learn about state and the component lifecycle in React.',
        topics: [
          { topicName: 'State Basics 40 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Lifecycle Methods 30 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'State Management 50 min', topicType: 'lecture', topicContent: [] },
        ],
      },
    ],
    format: 'Video lectures, hands-on projects, quizzes',
    courseReviews: [
      { rating: 5, comment: 'Great introduction to React!' },
      { rating: 4, comment: 'Very informative, but could use more examples.' },
    ],
    certificates: true,
    faqs: [
      { question: 'Do I need prior programming experience?', answer: 'Basic knowledge of JavaScript is recommended.' },
      { question: 'Will I get a certificate?', answer: 'Yes, you will receive a certificate upon completion.' },
    ],
    media: [
      'https://images.unsplash.com/photo-1559163499-413811fb2345?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1573496780727-e2f4e91424e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    courseName: 'Advanced CSS Techniques',
    description: 'Master advanced CSS concepts and techniques.',
    courseImage: 'https://plus.unsplash.com/premium_photo-1685086785636-2a1a0e5b591f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNzc3xlbnwwfHwwfHx8MA%3D%3D',
    courseId: 'advanced-css-techniques',
    courseDuration: '4 weeks',
    courseRating: 4.8,
    courseCategory: 'Web Development',
    difficulty: 'Intermediate',
    courseTags: ['CSS', 'Web Design'],
    chapters: [
      {
        chapterName: 'Chapter 1: CSS Grid Layout',
        content: 'Learn about CSS Grid Layout and its applications.',
        topics: [
          { topicName: 'Grid Basics 20 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Creating Grid Layouts 25 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Responsive Design with Grid 30 min', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Chapter 2: Flexbox',
        content: 'Understand Flexbox and how to use it for layout design.',
        topics: [
          { topicName: 'Flexbox Basics 20 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Aligning Items 25 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Responsive Design with Flexbox 30 min', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Chapter 3: Animations and Transitions',
        content: 'Learn how to create animations and transitions using CSS.',
        topics: [
          { topicName: 'Keyframes 20 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Transition Properties 25 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Animation Timing Functions 30 min', topicType: 'lecture', topicContent: [] },
        ],
      },
    ],
    format: 'Video lectures, hands-on projects, quizzes',
    courseReviews: [
      { rating: 5, comment: 'Best course on advanced CSS I have taken!' },
      { rating: 4, comment: 'Very detailed and well-structured.' },
    ],
    certificates: true,
    faqs: [
      { question: 'Do I need prior knowledge of CSS?', answer: 'Basic CSS knowledge is required.' },
      { question: 'Is this course suitable for beginners?', answer: 'This course is for intermediate learners.' },
    ],
    media: [
      'https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580910051071-73e9c3e18fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    courseName: 'Full-Stack Web Development',
    description: 'Become a full-stack web developer with this comprehensive course.',
    courseImage: 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww',
    courseId: 'full-stack-web-development',
    courseDuration: '12 weeks',
    courseRating: 4.9,
    courseCategory: 'Web Development',
    difficulty: 'Advanced',
    courseTags: ['JavaScript', 'Node.js', 'React', 'CSS', 'HTML'],
    chapters: [
      {
        chapterName: 'Module 1: Frontend Development',
        content: 'Learn about HTML, CSS, and JavaScript for frontend development.',
        topics: [
          { topicName: 'HTML5 1 hr 30 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'CSS3 1 hr 45 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'JavaScript ES6 2 hr', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Module 2: Backend Development',
        content: 'Understand backend development using Node.js and Express.',
        topics: [
          { topicName: 'Node.js Basics 1 hr 20 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Express Framework 1 hr 15 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Database Integration 1 hr 30 min', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Module 3: Full-Stack Integration',
        content: 'Learn how to integrate frontend and backend to build full-stack applications.',
        topics: [
          { topicName: 'REST APIs 1 hr 30 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'React with Node.js 1 hr 45 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Deployment Strategies 2 hr', topicType: 'lecture', topicContent: [] },
        ],
      },
    ],
    format: 'Video lectures, hands-on projects, quizzes',
    courseReviews: [
      { rating: 5, comment: 'A complete course for aspiring full-stack developers!' },
      { rating: 4.5, comment: 'Excellent content and projects.' },
    ],
    certificates: true,
    faqs: [
      { question: 'Do I need prior programming experience?', answer: 'Basic knowledge of JavaScript is recommended.' },
      { question: 'Will I get a certificate?', answer: 'Yes, you will receive a certificate upon completion.' },
    ],
    media: [
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1590642914884-9d79da91e065?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
  },

  // Computer Science Courses
  {
    courseName: 'Introduction to Algorithms',
    description: 'Learn the fundamental algorithms in computer science.',
    courseImage: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    courseId: 'introduction-to-algorithms',
    courseDuration: '8 weeks',
    courseRating: 4.7,
    courseCategory: 'Computer Science',
    difficulty: 'Intermediate',
    courseTags: ['Algorithms', 'Data Structures', 'Computer Science'],
    chapters: [
      {
        chapterName: 'Week 1: Sorting Algorithms',
        content: 'Learn about various sorting algorithms and their complexities.',
        topics: [
          { topicName: 'Bubble Sort 40 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Merge Sort 45 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Quick Sort 50 min', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Week 2: Searching Algorithms',
        content: 'Understand different searching algorithms.',
        topics: [
          { topicName: 'Linear Search 30 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Binary Search 35 min', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Week 3: Graph Algorithms',
        content: 'Explore algorithms related to graphs.',
        topics: [
          { topicName: 'Dijkstra’s Algorithm 1 hr', topicType: 'lecture', topicContent: [] },
          { topicName: 'A* Search 1 hr 15 min', topicType: 'lecture', topicContent: [] },
        ],
      },
    ],
    format: 'Video lectures, hands-on projects, quizzes',
    courseReviews: [
      { rating: 5, comment: 'Very detailed and clear explanations!' },
      { rating: 4, comment: 'A great refresher on algorithms.' },
    ],
    certificates: true,
    faqs: [
      { question: 'Do I need prior programming experience?', answer: 'Basic knowledge of programming is required.' },
      { question: 'Will I get a certificate?', answer: 'Yes, you will receive a certificate upon completion.' },
    ],
    media: [
      'https://images.unsplash.com/photo-1580910051071-73e9c3e18fdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559087869-d920d06e52bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    courseName: 'Database Management Systems',
    description: 'Learn about the principles and practices of database management.',
    courseImage: 'https://images.unsplash.com/photo-1590699573431-3c94802df6eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    courseId: 'database-management-systems',
    courseDuration: '6 weeks',
    courseRating: 4.6,
    courseCategory: 'Computer Science',
    difficulty: 'Intermediate',
    courseTags: ['Databases', 'SQL', 'Data Management'],
    chapters: [
      {
        chapterName: 'Week 1: Introduction to Databases',
        content: 'Understand the fundamentals of databases and their importance.',
        topics: [
          { topicName: 'What is a Database? 30 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Types of Databases 45 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Database Management Systems 1 hr', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Week 2: Relational Database Management Systems (RDBMS)',
        content: 'Learn about RDBMS and SQL for data management.',
        topics: [
          { topicName: 'Introduction to SQL 1 hr 15 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Basic SQL Queries 1 hr 30 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Advanced SQL Concepts 2 hr', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Week 3: Database Design and Normalization',
        content: 'Understand the principles of database design and normalization.',
        topics: [
          { topicName: 'Entity-Relationship Model 1 hr', topicType: 'lecture', topicContent: [] },
          { topicName: 'Database Normalization 1 hr 15 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Normalization Forms 1 hr 30 min', topicType: 'lecture', topicContent: [] },
        ],
      },
    ],
    format: 'Video lectures, hands-on projects, quizzes',
    courseReviews: [
      { rating: 5, comment: 'Excellent course with practical examples!' },
      { rating: 4.5, comment: 'Very informative and well-paced.' },
    ],
    certificates: true,
    faqs: [
      { question: 'Do I need prior database knowledge?', answer: 'No prior knowledge is required.' },
      { question: 'Will I get a certificate?', answer: 'Yes, you will receive a certificate upon completion.' },
    ],
    media: [
      'https://images.unsplash.com/photo-1590699573431-3c94802df6eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559063831-c349db39c5f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    courseName: 'Data Structures and Algorithms in Python',
    description: 'Learn data structures and algorithms using Python programming language.',
    courseImage: 'https://images.unsplash.com/photo-1530612309029-361c6d2d821b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    courseId: 'data-structures-algorithms-python',
    courseDuration: '10 weeks',
    courseRating: 4.8,
    courseCategory: 'Computer Science',
    difficulty: 'Intermediate',
    courseTags: ['Python', 'Algorithms', 'Data Structures'],
    chapters: [
      {
        chapterName: 'Week 1: Introduction to Python',
        content: 'Get started with Python programming language.',
        topics: [
          { topicName: 'Python Basics 1 hr', topicType: 'lecture', topicContent: [] },
          { topicName: 'Data Types and Variables 1 hr 15 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Control Flow 1 hr 30 min', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Week 2: Data Structures in Python',
        content: 'Learn about various data structures in Python.',
        topics: [
          { topicName: 'Lists and Tuples 1 hr 15 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Dictionaries and Sets 1 hr 30 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Stacks and Queues 1 hr 45 min', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Week 3: Algorithms with Python',
        content: 'Understand algorithmic concepts and implement them in Python.',
        topics: [
          { topicName: 'Searching Algorithms 2 hr', topicType: 'lecture', topicContent: [] },
          { topicName: 'Sorting Algorithms 2 hr 15 min', topicType: 'lecture', topicContent: [] },
          { topicName: 'Graph Algorithms 2 hr 30 min', topicType: 'lecture', topicContent: [] },
        ],
      },
    ],
    format: 'Video lectures, hands-on projects, quizzes',
    courseReviews: [
      { rating: 5, comment: 'A must-take course for Python enthusiasts!' },
      { rating: 4.5, comment: 'Well-explained concepts with practical examples.' },
    ],
    certificates: true,
    faqs: [
      { question: 'Do I need prior Python knowledge?', answer: 'Basic knowledge of Python is recommended.' },
      { question: 'Will I get a certificate?', answer: 'Yes, you will receive a certificate upon completion.' },
    ],
    media: [
      'https://images.unsplash.com/photo-1530612309029-361c6d2d821b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559087869-d920d06e52bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
  },
];