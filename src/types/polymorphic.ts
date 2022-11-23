import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  JSXElementConstructor
} from "react";

export type PropsOf<
  C extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, ComponentPropsWithoutRef<C>>;

export type RenderProp<C extends React.ElementType> = {
  render?: C;
};

export type MergeProps<ExtendableProps = {}, OverrideProps = {}> =
  OverrideProps & Omit<ExtendableProps, keyof OverrideProps>;

export type InheritableElementProps<C extends ElementType, Props = {}> =
  MergeProps<PropsOf<C>, Props>;

export type PolymorphicComponentProps<C extends React.ElementType, Props = {}> =
  InheritableElementProps<C, Props & RenderProp<C>>;

export type PolymorphicRef<C extends ElementType> =
  ComponentPropsWithRef<C>["ref"];

export type PolymorphicComponentPropsWithRef<
  C extends ElementType,
  Props = {}
> = PolymorphicComponentProps<C, Props> & { ref: PolymorphicRef<C> };
