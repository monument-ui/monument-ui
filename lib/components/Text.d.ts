import React from 'react';
import { Props } from '../interfaces';
import { Children } from '../types';
export declare const Text: ({ color, shadow, colorify, perspective, children, ...props }: Props & {
    children: Children;
}) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
