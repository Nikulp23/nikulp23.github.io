import React from 'react';
import { MantineProvider, Badge, Title , Text } from '@mantine/core';
import SimpleTimeline from './Timeline';

// Replace these imports with your actual logo image paths:
import RpiLogo from './rpi.png';
import ConEdLogo from './icon.webp';
import NyLifeLogo from './nyl.avif';
import GradLogo from './grad.png';

import styles from './About.module.css';

export function AboutSkillsToggle() {

  const steps = [
    {
      side: 'left',
      logo: RpiLogo,
      date: 'AUG 2022',
      description: (
        <>
          Started B.S in Computer Science & ITWS<br></br>
          Rensselaer Polytechnic Institute
        </>
      ),
    },
    {
      side: 'right',
      logo: ConEdLogo,
      date: 'MAY 2024 - APR 2025',
      description: 'Software Engineering Intern @ Con Edison',
    },
    {
      side: 'left',
      logo: NyLifeLogo,
      date: 'MAY 2025 - DEC 2025',
      description: 'Software Engineering Intern @ New York Life',
    },
    {
      side: 'right',
      date: 'DEC 2025',
      logo: GradLogo,
      description: (
        <>
          Graduated B.S. in Computer Science & ITWS<br />
          GPA: 3.77 / 4.0
        </>
      ),
    },
    {
      side: 'left',
      logo: RpiLogo,
      highlight: true,
      date: 'JAN 2026 - PRESENT',
      description: (
        <>
          M.S. in Computer Science<br></br>
          Rensselaer Polytechnic Institute
        </>
      )
    },
    {
      side: 'right',
      date: 'JUN 2026 - AUG 2026',
      description: 'Software Engineering Intern @ Capital One',
    }
  ];

  return (
    <MantineProvider>
      <section className={styles.About} style={{ padding: '60px 20px' }} id={styles.About}>
      
        <div style={{ textAlign: 'center', padding: '5px' }}>
          <Badge variant="filled" size="xl">
            MY JOURNEY
          </Badge>
          <Title order={3} style={{ marginTop: '14px' }}>
            Milestones in My Tech Journey
          </Title>

          <Text c='dimmed' style={{ marginTop: '3px' }} ta="center" mt="md">
            I learn, build, and grow — here’s how my journey has taken shape.
          </Text>

          <div>
            <SimpleTimeline items={steps} />
          </div>
        </div>

      </section>
    </MantineProvider>
  );
}

export default AboutSkillsToggle;