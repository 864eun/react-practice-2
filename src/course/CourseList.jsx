import React from 'react';
import '../App.css'
import Card from './CourseCard';

export default function CourseList() {
  return (
    <main>
		<div class="card">
			<div class="card__header">강의 목록</div>
			<div class="card__body">
				<div class="courses">
          <Card/>
          <Card/>
          <Card/>
				</div>
			</div>
		</div>
	</main>
  );
}

;