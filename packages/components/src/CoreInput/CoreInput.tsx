import { useRef, useState } from 'react';
import classNames from 'classnames';
import { useTextField, type AriaTextFieldProps } from 'react-aria';
import { Color } from '../consts';

export interface CoreInputProps extends AriaTextFieldProps {
  color?: Color;
}

/**
 * Represents the basic decoration around most <input> elements.
 * @returns
 */
export function CoreInput({ color = 'default', ...props }: CoreInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);
  const {
    onChange: inputOnChange,
    onFocus: inputOnFocus,
    onBlur: inputOnBlur,
    ...propsWithoutChange
  } = inputProps;
  const [val, setVal] = useState(inputProps.value);
  const [hasFocus, setFocus] = useState(inputProps.autoFocus);
  const hasValue = typeof val === 'string' && val.length > 0;

  const containerClasses = classNames(
    'group cursor-text',
    `border-solid border rounded border-transparent h-10`,
    'bg-gray-100/50 hover:bg-white focus-within:bg-white',
    'shadow-sm',
    'transition-all duration-200 ease-in-out p-2 px-4',
    'flex flex-col-reverse',
    COLOR_OPTIONS[color]?.container,
    {
      'bg-white': hasFocus,
      'border-gray-300': !hasValue && !hasFocus,
      'py-1': hasValue || hasFocus,
    }
  );

  const inputClasses = classNames(
    'peer transition-all outline-none block bg-transparent text-base ring-none',
    COLOR_OPTIONS[color]?.input,
    {
      'max-h-0': !hasValue && !hasFocus,
      'max-h-4': hasValue || hasFocus,
    }
  );

  const labelClasses = classNames(
    'cursor-text transition-all text-gray-400 group-hover:text-gray-500',
    COLOR_OPTIONS[color]?.label,
    {
      'text-normal peer-focus:text-xs': !hasValue && !hasFocus,
      'text-xs': hasValue || hasFocus,
    }
  );

  return (
    <div
      className={containerClasses}
      onClick={(e) => {
        ref.current?.focus();
        setFocus(true);
      }}
    >
      <input
        onChange={(e) => {
          setVal(e.target.value);
          inputOnChange?.(e);
        }}
        onFocus={(e) => {
          setFocus(true);
          inputOnFocus?.(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          inputOnBlur?.(e);
        }}
        {...propsWithoutChange}
        ref={ref}
        className={inputClasses}
      />
      <label {...labelProps} className={labelClasses}>
        {labelProps.children ?? props.label}
      </label>
    </div>
  );
}

/**
 * We cannot interpolate classes in Tailwind, so we have to use a lookup table.
 * https://tailwindcss.com/docs/content-configuration#dynamic-class-names
 */
type colorOptions = {
  [key: Color[number]]: {
    container: string[];
    label: string[];
    input: string[];
    status: string[];
  };
};
const COLOR_OPTIONS: colorOptions = {
  default: {
    container: [
      'hover:border-primary-500 focus-within:border-primary-500 shadow-black/10',
    ],
    label: [],
    input: [],
    status: [],
  },
  primary: {
    container: [
      'hover:border-primary-500 focus-within:border-primary-500 border-primary-500/10 bg-primary-100/30 shadow-primary-900/20',
    ],
    label: [
      'text-primary-500/40 group-hover:text-primary-500/60 peer-focus:text-primary-500/60',
    ],
    input: [
      'text-primary-500/70 hover:text-primary-500 focus:text-primary-500 peer-focus:text-primary-500',
    ],
    status: [],
  },
  secondary: {
    container: [
      'hover:border-secondary-500 focus-within:border-secondary-500 border-secondary-500/10 bg-secondary-100/30 shadow-secondary-900/20',
    ],
    label: [
      'text-secondary-500/40 group-hover:text-secondary-500/60 peer-focus:text-secondary-500/60',
    ],
    input: [
      'text-secondary-500/70 hover:text-secondary-500 focus:text-secondary-500 peer-focus:text-secondary-500',
    ],
    status: [],
  },
  info: {
    container: [
      'hover:border-info-500 focus-within:border-info-500 border-info-500/10 bg-info-100/30 shadow-info-900/20',
    ],
    label: [
      'text-info-500/40 group-hover:text-info-500/60 peer-focus:text-info-500/60',
    ],
    input: [
      'text-info-500/70 hover:text-info-500 focus:text-info-500 peer-focus:text-info-500',
    ],
    status: [],
  },
  warn: {
    container: [
      'hover:border-warn-500 focus-within:border-warn-500 border-warn-500/10 bg-warn-100/30 shadow-warn-900/20',
    ],
    label: [
      'text-warn-500/40 group-hover:text-warn-500/60 peer-focus:text-warn-500/60',
    ],
    input: [
      'text-warn-500/70 hover:text-warn-500 focus:text-warn-500 peer-focus:text-warn-500',
    ],
    status: [],
  },
  error: {
    container: [
      'hover:border-error-600 focus-within:border-error-600 border-error-600/10 bg-error-200 shadow-error-800/30 hover:bg-error-50',
    ],
    label: [
      'text-error-600/40 group-hover:text-error-600/60 peer-focus:text-error-600/60',
    ],
    input: [
      'text-error-600 hover:text-error-600 focus:text-error-600 peer-focus:text-error-600',
    ],
    status: [],
  },
  success: {
    container: [
      'hover:border-success-500 focus-within:border-success-500 border-success-500/10 bg-success-100/30 shadow-success-900/20',
    ],
    label: [
      'text-success-500/40 group-hover:text-success-500/60 peer-focus:text-success-500/60',
    ],
    input: [
      'text-success-500/70 hover:text-success-500 focus:text-success-500 peer-focus:text-success-500',
    ],
    status: [],
  },
};
