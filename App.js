import React, {useState,useEffect} from 'react';
import data from './data';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa';
// const url= 'https://course-api.com/react-tabs-project';
function App(){
	const [people,setPeople]=useState(data);
	const [index,setIndex]=useState(0);
	useEffect(()=>{
		let slider=setInterval(()=>{
			setIndex((index+1)%people.length);
		},3000);
		return ()=>clearInterval(slider);
	},[index])
	return (
		<section className='section'>
			<div className='title'>
				<h2>Reviews</h2>
			</div>
			<div className='section-center'>
				{people.map((person,personIndex)=>{
					let position= 'nextSlide';
					const {id,image,name,title,quote}=person;
					
					if(personIndex===index){
						position='activeSlide';
					}
					if(personIndex==index-1 || (index==0&personIndex==people.length-1)){
						position='lastSlide';
					}
					return (
					<article className={position} key={id}>
						<img src={image} className='person-img'/>
						<h4>{name}</h4>
						<p className='title'>{title}</p>
						<p className='text'>{quote}</p>
						<FaQuoteRight className='icon'/>
					</article>
					)
				})}
				<button className='prev' onClick={()=>setIndex((index-1+people.length)%people.length)}><FiChevronLeft /></button>
				<button className='next' onClick={()=>setIndex((index+1)%people.length)}><FiChevronRight/></button>
			</div>
		</section>
	)
}
export default App;