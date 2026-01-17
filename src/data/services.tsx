import React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessibleIcon from '@mui/icons-material/Accessible';
import HealingIcon from '@mui/icons-material/Healing';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export interface Service {
  title: string;
  desc: string;
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
];
