'use client';

import classes from './Card.module.css';

export function Card(props: any) {
  const {
    topic,
    title,
    number,
    bgColor,
    colorBorder,
    colorFont,
    icon,
    customMinheight,
    cusTomFontSize,
  } = props;
  return (
    <div
      className={classes.card}
      style={{
        backgroundColor: bgColor,
        borderColor: colorBorder,
        minHeight: customMinheight,
      }}
    >
      <div>
        <div
          className={classes.topic}
          style={{
            color: colorFont,
            fontSize: cusTomFontSize,
          }}
        >
          {topic}
        </div>
        <div
          style={{
            color: colorFont,
          }}
        >
          {title}
        </div>

        <div
          className={classes.number}
          style={{
            paddingTop: '10px',
            color: colorFont,
          }}
        >
          {number}
        </div>
      </div>
      <div>{icon}</div>
    </div>
  );
}
