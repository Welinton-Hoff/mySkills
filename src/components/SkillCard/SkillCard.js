import React from 'react';

import {
  TouchableOpacity,
  Text,
} from 'react-native';

import { styles } from '../SkillCard/styles';

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity
      style={styles.buttonSkill}
      activeOpacity={0.7}
    >
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  );
}