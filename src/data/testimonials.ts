export interface Testimonial {
  id: number;
  name: string;
  role: string; // e.g. "Knee Replacement Patient"
  image: string;
  quote: string;
  rating: number;
  story?: string; // Long form story for featured ones
  tags?: string[];
}

export const STATS = [
  { label: 'Happy Patients', value: '5,000+' },
  { label: 'Successful Surgeries', value: '2,500+' },
  { label: 'Years Experience', value: '15+' },
  { label: 'Google Rating', value: '4.9/5' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Mrs. Sharma',
    role: 'Total Knee Replacement',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote:
      "I was afraid I'd never walk without pain again. Two months after surgery, I'm playing with my grandkids in the park. Dr. Hariom gave me my life back.",
    tags: ['TKR', 'Pain Free'],
    story:
      'For 10 years, Mrs. Sharma struggled with severe osteoarthritis. Walking even a few steps was a challenge. After a bilateral Total Knee Replacement at Ortho Solution, she was walking with support in 2 days and completely independently in 3 weeks.',
  },
  {
    id: 2,
    name: 'Mr. Rajesh Verma',
    role: 'Sports Injury (ACL)',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote:
      'As a cricket enthusiast, tearing my ACL felt like the end. The arthroscopic surgery was seamless, and the rehab plan by Dr. Bharti was incredible.',
    tags: ['Sports Injury', 'Rehab'],
  },
  {
    id: 3,
    name: 'Anita Desai',
    role: 'Chronic Back Pain',
    image:
      'https://images.unsplash.com/photo-1554151228-14d9def656ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote:
      "I didn't want surgery. The team respected that and created a physiotherapy plan that actually worked. My back pain is gone for the first time in years.",
    tags: ['Physiotherapy', 'Non-Surgical'],
  },
  {
    id: 4,
    name: 'Col. Singh',
    role: 'Hip Replacement',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    rating: 5,
    quote:
      'The professionalism at this clinic is on par with the best military hospitals. Clean, disciplined, and effective. Highly recommended.',
    tags: ['Hip Replacement', 'Senior Care'],
  },
];
