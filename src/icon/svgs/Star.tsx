import * as React from 'react';
import Icon from '@jdcfe/icons-react/';

const starSvg = (props: any) => (
  <svg viewBox="0 0 1024 1024" {...props}>
    <path
      d="M987.446857 369.700571c0 10.276571-7.424 20.004571-14.848 27.428572l-207.433143 202.276571 49.152 285.696c0.585143 3.986286 0.585143 7.424 0.585143 11.446857 0 14.848-6.838857 28.562286-23.442286 28.562286a46.445714 46.445714 0 0 1-22.857142-6.838857L512.018286 783.433143l-256.585143 134.838857c-7.424 3.986286-14.848 6.838857-22.857143 6.838857-16.566857 0-23.990857-13.714286-23.990857-28.562286 0-3.986286 0.585143-7.424 1.133714-11.446857l49.152-285.696L50.852571 397.129143c-6.838857-7.424-14.299429-17.152-14.299428-27.428572 0-17.152 17.700571-23.990857 32-26.294857l286.866286-41.728 128.585142-259.986285c5.156571-10.861714 14.848-23.442286 28.013715-23.442286s22.857143 12.580571 28.013714 23.442286l128.585143 259.986285 286.866286 41.728c13.714286 2.304 32 9.142857 32 26.294857z"
      p-id="7849"
    />
  </svg>
);

const Star = (props: any) => <Icon component={starSvg} {...props} />;
export default Star;