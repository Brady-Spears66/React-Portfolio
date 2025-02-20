import * as React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { useTheme } from '@mui/material';

export default function AlternateTimeline() {
  const theme = useTheme();
  
  const backgroundColor = theme.palette.mode === 'dark'
    ? 'rgba(255, 255, 255, 0.06)' 
    : 'grey';
    
  const textColor = 'white';

  const timelineClassName = theme.palette.mode === 'dark' ? 'dark-timeline' : 'light-timeline';

// Safe HTML rendering component
// @ts-ignore
const HTMLContent = ({ content }) => {
  return <span dangerouslySetInnerHTML={{ __html: content }} />;
};

  return (
    <>
      <style>
        {`
          .dark-timeline .vertical-timeline::before {
            background: white;
          }
          
          .light-timeline .vertical-timeline::before {
            background: black;
          }

          .dark-timeline .vertical-timeline-element-date {
            color: white !important;
          }
          
          .light-timeline .vertical-timeline-element-date {
            color: black !important;
          }

          .vertical-timeline-element-icon {
            width: 5rem !important;
            height: 5rem !important;
            margin-left: -2.5rem !important;
            overflow: hidden !important;
          }

          .vertical-timeline-element-icon img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            padding: 0;
            background: white;
          }

          /* Adjust size for different screen sizes */
          @media only screen and (min-width: 1170px) {
            .vertical-timeline-element-date {
              margin-right: 2rem !important;
              margin-left: 2rem !important;
              /* Space between date and content */
            }

            .vertical-timeline-element-content {
            
               /* Space between content and icon */
            }

          }

          @media only screen and (max-width: 1169px) {
            .vertical-timeline-element-icon {
              width: 3.5rem !important;
              height: 3.5rem !important;
              margin-left: -.5rem !important;
            }  
          }

          @media only screen and (max-width: 768px) {
            .vertical-timeline-element-title {
              font-size: 1.2rem; /* Adjust for smaller screens */
            }

            .vertical-timeline-element-subtitle {
              font-size: 1rem; /* Adjust for smaller screens */
            }

            .vertical-timeline-element-content ul {
              font-size: 0.7rem; /* Adjust for smaller screens */
            }
          }

          @media only screen and (max-width: 480px) {
            .vertical-timeline-element-title {
              font-size: 1rem; /* Adjust for very small screens */
            }

            .vertical-timeline-element-subtitle {
              font-size: 0.8rem; /* Adjust for very small screens */
            }

            .vertical-timeline-element-content ul {
              font-size: 0.6rem; /* Adjust for very small screens */
            }
          }
        `}
      </style>
      <div className={timelineClassName}>
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              date={exp.date}
              icon={<img src={exp.logo} alt={exp.company} />}
              iconStyle={{
                background: 'white',
                overflow: 'hidden'
              }}
              contentStyle={{ 
                color: textColor,
                background: backgroundColor
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${backgroundColor}`
              }}
              dateClassName="vertical-timeline-element-date"
            >
              <h3 className="vertical-timeline-element-title">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
              <h4 className="vertical-timeline-element-subtitle">{exp.location}</h4>
              <ul>
                {exp.points.map((point, idx) => (
                  <li key={idx}>
                    <HTMLContent content={point} />
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}