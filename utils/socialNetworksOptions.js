// utils/socialNetworksOptions.js
import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

export const socialNetworksOptions = [
  { label: 'Facebook', value: 'facebook', icon: <FaFacebook color="#3b5998" /> },
  { label: 'Instagram', value: 'instagram', icon: <FaInstagram color="#E1306C" /> },
  { label: 'LinkedIn', value: 'linkedin', icon: <FaLinkedin color="#0077B5" /> },
  { label: 'Twitter', value: 'twitter', icon: <FaTwitter color="#1DA1F2" /> },
  { label: 'TikTok', value: 'tiktok', icon: <FaTiktok color="#000000" /> },
  { label: 'YouTube', value: 'youtube', icon: <FaYoutube color="#FF0000" /> },
];
