import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
  } from '@mantine/core';
  
  import classes from './FeaturesCards.module.css';
  import { motion } from 'framer-motion';
  import React from 'react';
  import capitalone from './logos/capitalone.png';
  import coned from './logos/coned.png';
  import nyl from './logos/nyl.avif';

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.5 }
    }),
    hover: { scale: 1.03 }
  };

  const mockdata = [
    {
      title: 'Software Engineering Intern',
      date: 'JUN 2026 - AUG 2026',
      technologies: [ "PYTHON", "AWS", "SNOWFLAKE" ],
      description: [
        '• Built a serverless, event-driven pipeline on AWS that syncs user entitlements from 5 vendors into Capital One’s access-management platform, closing a compliance gap in third-party access tracking.',
        '• Subscribed an SQS queue to a cross-account SNS topic to trigger the pipeline, eliminating silent message loss with retries and a 14-day-retention dead-letter queue.',
        '• Provisioned S3 and Lambda infrastructure as code through a Jenkins-based CI/CD pipeline, with a least-privilege execution role backed by AWS Secrets Manager.'
      ],
      image: capitalone,
    },
    {
      title: 'Software Engineering Intern',
      date: 'MAY 2025 - DEC 2025',
      technologies: [ "JAVA", "KOGITO", "POSTMAN" ],
      description: [
        '• Led backend development of 80+ insurance business rules using Kogito Java DSL, validating logic with JUnit tests to automate approvals across 1M+ transactions.',
        '• Developed automated testing suites in Postman incorporating unit and integration testing to reduce deployment time by 20%.',
        '• Collaborated with teams using Agile methodologies, contributing to code reviews, sprint planning, and feature delivery.'
      ],
      image: nyl,
    },
    {
      title: 'Software Engineering Intern',
      date: 'MAY 2024 - APRIL 2025',
      technologies: [ "C#" , "SQL", "ANGULAR JS"],
      description: [
        '• Designed an ASP.NET service in C# to query a database of 40,000+ outage records, extracting critical insights and detecting conflicts to optimize outage scheduling workflows.',
        '• Implemented custom API controllers in C# to optimize transformer analysis for 50+ substations.',
        '• Developed an Outage Scheduling System application with AngularJS and .NET Web APIs.',
      ],
      image: coned,
    }
  ];
  
  export function FeaturesCards() {

    const standardizeImage = (src, alt) => (
      <div className={classes.imageWrapper}>
        <img 
          src={src} 
          alt={alt} 
          className={classes.cardImage}
        />
      </div>
    );

    const features = mockdata.map((feature) => (
      <motion.div
        key={feature.title}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        className={classes.cardWrapper}
      >
        
      <Card shadow="md" radius="md" className={classes.card} padding="xl">
      
        {feature.image && standardizeImage(feature.image, feature.title)}

        <div style={{ textAlign: 'center' }}>
          <Text fz="lg" fw={600} className={classes.cardTitle} mt="md">
            {feature.title}
          </Text>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Badge variant="filled" size="sm">
            {feature.date}
          </Badge>
        </div>

        <Text fz="sm" mt="sm" className={classes.cardDescription}>
          {feature.description.map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < feature.description.length - 1 && <br />} <br/>
            </React.Fragment>
          ))}
        </Text>

      </Card>

      </motion.div>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="xl">
            WORK EXPERIENCE
          </Badge>
        </Group>
        
  
        <Title order={3} className={classes.title} ta="center" mt="sm">
          Career Highlights
        </Title>
  
        <Text c='dimmed' className={classes.description} ta="center" mt="md">
        From leading innovative projects to gaining hands-on industry experience, my journey in technology reflects a commitment to growth, excellence, and continuous learning.
        </Text>
  
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mt={30}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }