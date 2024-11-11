import React from 'react';
import SectionWrapper from './SectionWrapper';
import ExerciseCard from './ExerciseCard';

const Workout = ({ workout }) => {
  return (
    <SectionWrapper
      id={'workout'}
      header={'Welcome to'}
      title={['The', 'danger ', 'zone']}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) => {
          return <ExerciseCard exercise={exercise} key={i} index={i} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default Workout;
