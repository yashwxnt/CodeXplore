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
          { topicName: 'What is React?', topicType: 'lecture', topicContent: [] },
          { topicName: 'History of React', topicType: 'lecture', topicContent: [] },
          { topicName: 'Why use React?', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Chapter 2: Components and Props',
        content: 'Understand components and how to use props in React.',
        topics: [
          { topicName: 'Functional Components', topicType: 'lecture', topicContent: [] },
          { topicName: 'Class Components', topicType: 'lecture', topicContent: [] },
          { topicName: 'Using Props', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Chapter 3: State and Lifecycle',
        content: 'Learn about state and the component lifecycle in React.',
        topics: [
          { topicName: 'State Basics', topicType: 'lecture', topicContent: [] },
          { topicName: 'Lifecycle Methods', topicType: 'lecture', topicContent: [] },
          { topicName: 'State Management', topicType: 'lecture', topicContent: [] },
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
          { topicName: 'Grid Basics', topicType: 'lecture', topicContent: [] },
          { topicName: 'Creating Grid Layouts', topicType: 'lecture', topicContent: [] },
          { topicName: 'Responsive Design with Grid', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Chapter 2: Flexbox',
        content: 'Understand Flexbox and how to use it for layout design.',
        topics: [
          { topicName: 'Flexbox Basics', topicType: 'lecture', topicContent: [] },
          { topicName: 'Aligning Items', topicType: 'lecture', topicContent: [] },
          { topicName: 'Responsive Design with Flexbox', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Chapter 3: Animations and Transitions',
        content: 'Learn how to create animations and transitions using CSS.',
        topics: [
          { topicName: 'Keyframes', topicType: 'lecture', topicContent: [] },
          { topicName: 'Transition Properties', topicType: 'lecture', topicContent: [] },
          { topicName: 'Animation Timing Functions', topicType: 'lecture', topicContent: [] },
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
          { topicName: 'HTML5', topicType: 'lecture', topicContent: [] },
          { topicName: 'CSS3', topicType: 'lecture', topicContent: [] },
          { topicName: 'JavaScript ES6', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Module 2: Backend Development',
        content: 'Understand backend development using Node.js and Express.',
        topics: [
          { topicName: 'Node.js Basics', topicType: 'lecture', topicContent: [] },
          { topicName: 'Express Framework', topicType: 'lecture', topicContent: [] },
          { topicName: 'Database Integration', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Module 3: Full-Stack Integration',
        content: 'Learn how to integrate frontend and backend to build full-stack applications.',
        topics: [
          { topicName: 'REST APIs', topicType: 'lecture', topicContent: [] },
          { topicName: 'React with Node.js', topicType: 'lecture', topicContent: [] },
          { topicName: 'Deployment Strategies', topicType: 'lecture', topicContent: [] },
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
          { topicName: 'Bubble Sort', topicType: 'lecture', topicContent: [] },
          { topicName: 'Merge Sort', topicType: 'lecture', topicContent: [] },
          { topicName: 'Quick Sort', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Week 2: Searching Algorithms',
        content: 'Understand different searching algorithms.',
        topics: [
          { topicName: 'Linear Search', topicType: 'lecture', topicContent: [] },
          { topicName: 'Binary Search', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Week 3: Graph Algorithms',
        content: 'Explore algorithms related to graphs.',
        topics: [
          { topicName: 'Dijkstra’s Algorithm', topicType: 'lecture', topicContent: [] },
          { topicName: 'A* Search', topicType: 'lecture', topicContent: [] },
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
      'https://images.unsplash.com/photo-1526374959541-a071d58b56a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
  },
  {
    courseName: 'Data Structures in Depth',
    description: 'Master data structures to enhance your programming skills.',
    courseImage: 'https://images.unsplash.com/photo-1534751516642-a1af1ef63e',
    courseId: 'data-structures-in-depth',
    courseDuration: '6 weeks',
    courseRating: 4.6,
    courseCategory: 'Computer Science',
    difficulty: 'Intermediate',
    courseTags: ['Data Structures', 'Algorithms', 'Programming'],
    chapters: [
      {
        chapterName: 'Week 1: Arrays and Linked Lists',
        content: 'Learn about arrays, linked lists, and their implementations.',
        topics: [
          { topicName: 'Arrays', topicType: 'lecture', topicContent: [] },
          { topicName: 'Singly Linked Lists', topicType: 'lecture', topicContent: [] },
          { topicName: 'Doubly Linked Lists', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Week 2: Stacks and Queues',
        content: 'Understand the concepts of stacks and queues and their applications.',
        topics: [
          { topicName: 'Stacks', topicType: 'lecture', topicContent: [] },
          { topicName: 'Queues', topicType: 'lecture', topicContent: [] },
          { topicName: 'Implementations and Applications', topicType: 'lecture', topicContent: [] },
        ],
      },
      {
        chapterName: 'Week 3: Trees and Graphs',
        content: 'Explore tree and graph data structures and their algorithms.',
        topics: [
          { topicName: 'Binary Trees', topicType: 'lecture', topicContent: [] },
          { topicName: 'Graph Representation', topicType: 'lecture', topicContent: [] },
          { topicName: 'Traversal Algorithms', topicType: 'lecture', topicContent: [] },
        ],
      },
    ],
    format: 'Video lectures, coding exercises, quizzes',
    courseReviews: [
      { rating: 5, comment: 'In-depth coverage of data structures with clear examples!' },
      { rating: 4.5, comment: 'Excellent course material and challenging exercises.' },
    ],
    certificates: true,
    faqs: [
      { question: 'Is this course suitable for beginners?', answer: 'This course is recommended for intermediate learners with some programming experience.' },
      { question: 'Will I receive a certificate?', answer: 'Yes, upon successful completion of the course.' },
    ],
    media: [
      'https://images.unsplash.com/photo-1522196772883-39f0a118be96?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1532009324734-20a7a5813719?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    ],
  },
];