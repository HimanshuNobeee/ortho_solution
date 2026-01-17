import React from 'react';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AccessibleIcon from '@mui/icons-material/Accessible';
import HealingIcon from '@mui/icons-material/Healing';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export const SERVICES = [
  {
    title: 'Joint Replacement',
    desc: 'Minimally invasive hip and knee replacement surgeries.',
    icon: React.createElement(AccessibleIcon, { fontSize: 'large' }),
  },
  {
    title: 'Sports Injuries',
    desc: 'Advanced treatment for ligament tears and sports trauma.',
    icon: React.createElement(DirectionsRunIcon, { fontSize: 'large' }),
  },
  {
    title: 'Physiotherapy',
    desc: 'Personalized rehab programs for faster recovery.',
    icon: React.createElement(SelfImprovementIcon, { fontSize: 'large' }),
  },
  {
    title: 'Spine Care',
    desc: 'Expert management of back pain and spinal disorders.',
    icon: React.createElement(HealthAndSafetyIcon, { fontSize: 'large' }),
  },
  {
    title: 'Fracture Care',
    desc: 'Comprehensive care for all types of bone fractures.',
    icon: React.createElement(HealingIcon, { fontSize: 'large' }),
  },
  {
    title: 'Arthroscopy',
    desc: 'Diagnostic and therapeutic keyhole joint procedures.',
    icon: React.createElement(LocalHospitalIcon, { fontSize: 'large' }),
  },
];
