import React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessibleIcon from '@mui/icons-material/Accessible';
import HealingIcon from '@mui/icons-material/Healing';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import PanToolIcon from '@mui/icons-material/PanTool';
import DoNotStepIcon from '@mui/icons-material/DoNotStep';
import PsychologyIcon from '@mui/icons-material/Psychology';

export interface Service {
  title: string;
  desc: string;
  image: string; // Added image property
  icon: React.ReactNode;
  details: {
    longDesc: string;
    conditions: string[];
    procedures: string[];
  };
}

export const SERVICES: Service[] = [
  {
    title: 'Joint Replacement',
    desc: 'Minimally invasive hip and knee replacement surgeries.',
    image:
      'https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: React.createElement(AccessibleIcon, { fontSize: 'large' }),
    details: {
      longDesc:
        'Our joint replacement program uses the latest minimally invasive techniques to treat severe arthritis and joint damage. We focus on rapid recovery protocols to get you back on your feet faster with less pain.',
      conditions: [
        'Osteoarthritis',
        'Rheumatoid Arthritis',
        'Severe Joint Pain',
        'Limited Mobility',
      ],
      procedures: [
        'Total Knee Replacement',
        'Total Hip Replacement',
        'Partial Knee Replacement',
        'Robotic-Assisted Surgery',
      ],
    },
  },
  {
    title: 'Sports Injuries',
    desc: 'Advanced treatment for ligament tears and sports trauma.',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: React.createElement(DirectionsRunIcon, { fontSize: 'large' }),
    details: {
      longDesc:
        'From weekend warriors to professional athletes, we provide comprehensive care for sports-related injuries. Our goal is to restore function and stability so you can return to your active lifestyle safely.',
      conditions: [
        'ACL/PCL Tears',
        'Meniscus Injuries',
        'Rotator Cuff Tears',
        'Ankle Sprains',
      ],
      procedures: [
        'Ligament Reconstruction',
        'Cartilage Restoration',
        'Tendinitis Treatment',
        'Fracture Management',
      ],
    },
  },
  {
    title: 'Physiotherapy',
    desc: 'Personalized rehab programs for faster recovery.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: React.createElement(SelfImprovementIcon, { fontSize: 'large' }),
    details: {
      longDesc:
        'Our physiotherapy department works hand-in-hand with surgeons to ensure the best post-operative outcomes. We also treat non-surgical musculoskeletal conditions with advanced manual therapy and exercise protocols.',
      conditions: [
        'Post-Surgical Stiffness',
        'Back & Neck Pain',
        'Frozen Shoulder',
        'Muscle Weakness',
      ],
      procedures: [
        'Manual Therapy',
        'Gait Training',
        'Strengthening Exercises',
        'Electrotherapy',
      ],
    },
  },
  {
    title: 'Spine Care',
    desc: 'Expert management of back pain and spinal disorders.',
    image:
      'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: React.createElement(HealthAndSafetyIcon, { fontSize: 'large' }),
    details: {
      longDesc:
        'We offer a holistic approach to spine health, ranging from non-invasive pain management to complex spinal surgeries. We prioritize conservative treatment whenever possible.',
      conditions: [
        'Disc Herniation',
        'Sciatica',
        'Spondylosis',
        'Spinal Stenosis',
      ],
      procedures: [
        'Minimally Invasive Spine Surgery',
        'Discectomy',
        'Spinal Fusion',
        'Epidural Injections',
      ],
    },
  },
  {
    title: 'Fracture Care',
    desc: 'Comprehensive care for all types of bone fractures.',
    image:
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: React.createElement(HealingIcon, { fontSize: 'large' }),
    details: {
      longDesc:
        'Accidents happen, and when they do, immediate and expert care is crucial. We treat all types of fractures, ensuring proper alignment and healing to prevent long-term complications.',
      conditions: [
        'Compound Fractures',
        'Hairline Fractures',
        'Dislocations',
        'Non-union Fractures',
      ],
      procedures: [
        'Casting & Splinting',
        'Open Reduction Internal Fixation',
        'External Fixation',
        'Bone Grafting',
      ],
    },
  },
  {
    title: 'Arthroscopy',
    desc: 'Diagnostic and therapeutic keyhole joint procedures.',
    image:
      'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: React.createElement(LocalHospitalIcon, { fontSize: 'large' }),
    details: {
      longDesc:
        'Arthroscopy is a minimally invasive surgical procedure used to visualize, diagnose, and treat problems inside a joint. It involves smaller incisions, less scarring, and faster recovery times.',
      conditions: [
        'Joint Inflammation',
        'Loose Bone Fragments',
        'Torn Ligaments',
        'Cartilage Damage',
      ],
      procedures: [
        'Knee Arthroscopy',
        'Shoulder Arthroscopy',
        'Ankle Arthroscopy',
        'Wrist Arthroscopy',
      ],
    },
  },
  // NEW CATEGORIES
  {
    title: 'Pediatric Orthopedics',
    desc: "Specialized care for children's bone and joint health.",
    image:
      'https://images.unsplash.com/photo-1628173423784-db72be807e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: React.createElement(ChildCareIcon, { fontSize: 'large' }),
    details: {
      longDesc:
        'Children are not just small adults. Their growing bones require specialized care. We treat congenital deformities, growth plate injuries, and developmental disorders with compassion.',
      conditions: [
        'Clubfoot',
        'Scoliosis',
        'Growth Plate Fractures',
        'Cerebral Palsy',
      ],
      procedures: [
        'Deformity Correction',
        'Growth Modulation',
        'Casting',
        'Pediatric Trauma Surgery',
      ],
    },
  },
  {
    title: 'Hand & Wrist',
    desc: 'Expert treatment for carpal tunnel, trigger finger & trauma.',
    image:
      'https://images.unsplash.com/photo-1628173423851-d41a8c9096b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: React.createElement(PanToolIcon, { fontSize: 'large' }),
    details: {
      longDesc:
        'Our hands are our tools. We provide expert care for complex hand and wrist injuries, restoring fine motor skills and strength.',
      conditions: [
        'Carpal Tunnel Syndrome',
        'Trigger Finger',
        'Wrist Fractures',
        'Tendonitis',
      ],
      procedures: [
        'Carpal Tunnel Release',
        'Tendon Repair',
        'Microsurgery',
        'Wrist Arthroscopy',
      ],
    },
  },
  {
    title: 'Foot & Ankle',
    desc: 'Comprehensive care for plantar fasciitis, bunions & trauma.',
    image:
      'https://images.unsplash.com/photo-1599462635951-6058e5e6e849?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: React.createElement(DoNotStepIcon, { fontSize: 'large' }),
    details: {
      longDesc:
        'Foot pain can be debilitating. We offer medical and surgical solutions for a wide range of foot and ankle problems to keep you moving comfortably.',
      conditions: [
        'Plantar Fasciitis',
        'Bunions',
        'Ankle Instability',
        'Flat Feet',
      ],
      procedures: [
        'Bunionectomy',
        'Ankle Ligament Repair',
        'Achilles Tendon Repair',
        'Orthotics',
      ],
    },
  },
  {
    title: 'Rheumatology',
    desc: 'Management of arthritis and autoimmune joint diseases.',
    image:
      'https://images.unsplash.com/photo-1584515933487-9dca738ae587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    icon: React.createElement(PsychologyIcon, { fontSize: 'large' }),
    details: {
      longDesc:
        "We don't just treat the joints; we treat the underlying cause. Our rheumatology services help manage autoimmune conditions that affect the musculoskeletal system.",
      conditions: [
        'Rheumatoid Arthritis',
        'Gout',
        'Lupus',
        'Ankylosing Spondylitis',
      ],
      procedures: [
        'Biologic Therapy',
        'Joint Injections',
        'Disease Modifying Drugs',
        'Immune System Management',
      ],
    },
  },
];
