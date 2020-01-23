import React from 'react';
import { Props } from '../interfaces';
import { Events } from '../types';
export declare const Element: ({ color, shadow, colorify, perspective, clickable, hoverable, touchable, children, ...props }: Props & Events & {
    children?: string | number | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | React.ReactChild[] | undefined;
}) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
