export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string; // HTML or Markdown-like string for the full article
  author: string;
  readTime: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'stronger-knees',
    title: '5 Exercises for Stronger Knees',
    category: 'Physiotherapy',
    date: 'Oct 15, 2024',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    excerpt:
      'Discover the top 5 exercises recommend by our physiotherapists to improve knee stability and reduce pain.',
    author: 'Dr. Bharti Gupta',
    readTime: '5 min read',
    content: `
      <p>Knee pain is a common complaint that affects people of all ages. Whether caused by a ruptured ligament, torn cartilage, or arthritis, knee pain can severely limit your mobility.</p>
      <p>Here are 5 strengthening exercises recommended by our experts:</p>
      <h3>1. Straight Leg Raises</h3>
      <p>Lie on your back with one leg bent and the other straight. Slowly lift the straight leg up to the height of the bent knee. Hold for 3 seconds and lower slowly.</p>
      <h3>2. Hamstring Curls</h3>
      <p>Hold onto a chair for balance. Bend your knee as far back as you can. Hold for a few seconds.</p>
      <h3>3. Wall Squats</h3>
      <p>Keep your back against a wall and feet shoulder-width apart. Slowly lower yourself until your knees are bent at a comfortable angle.</p>
      <h3>4. Step-Ups</h3>
      <p>Step onto a sturdy bench or stair with one foot, then the other. Step down and repeat.</p>
      <h3>5. Side Leg Raises</h3>
      <p>Lie on your side with your legs stacked. Lift the top leg as high as you comfortably can, then lower it.</p>
      <p>Always consult with a physiotherapist before starting a new exercise routine.</p>
    `,
  },
  {
    id: 'joint-replacement-guide',
    title: 'Understanding Joint Replacement Surgery',
    category: 'Orthopedics',
    date: 'Oct 10, 2024',
    image:
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    excerpt:
      'A comprehensive guide to what to expect before, during, and after a joint replacement procedure.',
    author: 'Dr. Hariom Gupta',
    readTime: '8 min read',
    content: `
      <p>Joint replacement surgery is a safe and effective procedure to relieve pain and restore motion in a damaged joint.</p>
      <h3>When is it needed?</h3>
      <p>Surgery is usually recommended when non-surgical treatments like medication and physical therapy have failed to relieve pain.</p>
      <h3>The Procedure</h3>
      <p>During the surgery, the damaged parts of the joint are removed and replaced with artificial metal or plastic components.</p>
      <h3>Recovery</h3>
      <p>Recovery times vary, but most patients are able to walk with assistance the day after surgery. Physical therapy is a crucial part of the recovery process.</p>
    `,
  },
  {
    id: 'post-surgery-rehab',
    title: 'Post-Surgery Rehab Tips',
    category: 'Recovery',
    date: 'Oct 05, 2024',
    image:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    excerpt:
      'Maximize your recovery speed and effectiveness with these essential post-operative rehabilitation tips.',
    author: 'Dr. Bharti Gupta',
    readTime: '6 min read',
    content: `
      <p>Successful surgery is only half the battle. Rehabilitation is where the real work begins.</p>
      <h3>1. Follow Your Plan</h3>
      <p>Adhere strictly to the exercise regimen prescribed by your physiotherapist.</p>
      <h3>2. Manage Pain</h3>
      <p>Take prescribed pain medication as directed so you can perform your exercises comfortably.</p>
      <h3>3. Rest is Key</h3>
      <p>Your body needs energy to heal. Ensure you are getting enough sleep and eating nutritious food.</p>
      <h3>4. Stay Positive</h3>
      <p>Recovery can be slow and frustrating. Celebrate small victories along the way.</p>
    `,
  },
];
