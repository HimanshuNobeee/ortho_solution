import doctor1 from '../assets/images/doctor1.jpg';
import doctor2 from '../assets/images/doctor2.jpg';

export interface Doctor {
  id: number;
  name: string;
  role: string;
  qualifications: string;
  experience: string;
  image: string;
  specialties: string[];
  bio: string;
  availability: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Hariom Gupta',
    role: 'Orthopedic Surgeon',
    qualifications: 'MBBS, MS (Orthopedics)',
    experience: '15+ Years Experience',
    image: doctor1,
    specialties: [
      'Joint Replacement',
      'Arthroscopy',
      'Trauma Surgery',
      'Sports Medicine',
    ],
    bio: 'Dr. Hariom Gupta is a renowned orthopedic surgeon with over 15 years of experience in performing complex joint replacements and trauma surgeries. He is dedicated to restoring mobility and improving the quality of life for his patients through advanced surgical techniques and personalized care.',
    availability: 'Mon - Sat: 10:00 AM - 2:00 PM',
  },
  {
    id: 2,
    name: 'Dr. Bharti Gupta',
    role: 'Physiotherapist',
    qualifications: 'BPT, MPT (Neuro)',
    experience: '12+ Years Experience',
    image: doctor2,
    specialties: [
      'Neuro Rehabilitation',
      'Post-Op Recovery',
      'Pain Management',
      'Sports Injury Rehab',
    ],
    bio: 'Dr. Bharti Gupta is a specialized physiotherapist with expertise in neurological rehabilitation and post-operative recovery. She believes in a holistic approach to healing, combining manual therapy with therapeutic exercises to help patients regain strength and independence.',
    availability: 'Mon - Sat: 4:00 PM - 8:00 PM',
  },
];
