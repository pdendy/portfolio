import React, {useState, useEffect} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import {animate, motion} from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, sanityClient } from '../../client';
import './Work.scss'; 

const Work = () => {

  const [activefilter, setactivefilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});
  const [setWorks, setsetWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);

useEffect(() => {
  const query = '*[_type == "works"]';

  sanityClient.fetch(query)
  .then((data) => {
    setWorks(data);
    setFilterWork(data);
  })
}, [])


  const handleWorkFilter = (item) => {}
  return (
    <>
      <h2 className="head-text"> My Creative <span>Portfolio </span> Section </h2>

      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => 
          (          
           <div 
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activefilter === item ? 'item-active' : ''}`}
            >
              {item}
           </div> 
          ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app_flex" key={index}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgURL)} alt={work.name} />
              <motion.div
                whileHover={{opacity: [0,1]}}
                transition={{ duration: 0.5, ease: 'easeInOut', staggerChildren: 0.5}}
                className="app__work-hover app__flex"
              >
                <a href={work.projectLink} target='blank' rel='norefer'>
                  <motion.div
                   whileInView={{scale: [0, 1]}}
                   whileHover={{scale: [0,1]}}
                   transition={{ duration: 0.25}}
                   className="app__flex"
                   >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='blank' rel='norefer'>
                  <motion.div
                   whileInView={{scale: [0, 1]}}
                   whileHover={{scale: [0,1]}}
                   transition={{ duration: 0.25}}
                   className="app__flex"
                   >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
            <h4 className='bold-text'>{work.title}</h4>
            <p className='p-text' style={{ marginTop: 10}}> {work.description} </p>

            <div className='app__work-tag app__flex'>
            <p className='p-text'> {work.tags[0]} </p>
            </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(Work, 'work');