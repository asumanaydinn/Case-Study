import clsx from 'clsx';
import React, { useRef } from 'react';

type TextInputProps = {
  type: 'text' | 'password' | 'email';
  value?: string;
  onChange?: (value: string) => void;
};

type NumberInputProps = {
  type: 'number';
  value?: number;
  onChange?: (value: number | null) => void;
};

type BaseInputProps = {
  renderPrefix?: () => React.ReactNode;
  label?: string;
  error?: string;
  hideErrorMessages?: boolean;
  className?: string;
  wrapperClassName?: string;
  prefixClassName?: string;
  innerClassName?: string;
  allowFloat?: boolean;
  renderSuffix?: () => React.ReactNode;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'type' | 'value'>;

type InputProps = BaseInputProps & (TextInputProps | NumberInputProps);

const Input = ({
  renderPrefix,
  label,
  disabled,
  onChange,
  error,
  type,
  value,
  hideErrorMessages,
  className,
  prefixClassName,
  wrapperClassName,
  innerClassName,
  renderSuffix,
  allowFloat,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div className={clsx('input-wrapper', wrapperClassName)}>
      <div
        ref={wrapperRef}
        className={clsx(
          'input',
          renderPrefix && 'has-prefix',
          label && 'has-label',
          disabled && 'is-disabled',
          error && 'has-error',
          className
        )}
        onClick={e => {
          if (disabled) return;

          e.stopPropagation();

          inputRef.current?.focus();
        }}
      >
        {renderPrefix && <div className={clsx('input-icon', prefixClassName)}>{renderPrefix()}</div>}
        <div className={clsx('input-inner', innerClassName)}>
          {label && <label className="input-label">{label}</label>}
          <div className="flex items-center justify-between">
            <input
              className="flex-grow  pr-2"
              ref={inputRef}
              type={type}
              disabled={disabled}
              value={value}
              onKeyPress={e => {
                if (type === 'number') {
                  if (!allowFloat && !/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }

                  if (allowFloat && !/[0-9.]/.test(e.key)) {
                    e.preventDefault();
                  }
                }
              }}
              onChange={e => {
                const value = e.target.value;
                if (type === 'text' || type === 'password' || type === 'email') {
                  onChange?.(value);
                } else if (type === 'number') {
                  if (!value) {
                    onChange?.(null);
                    return;
                  }
                  if (rest.min && rest.max) {
                    onChange?.(
                      value ? Math.max(rest.min as number, Math.min(rest.max as number, Number(value))) : null
                    );
                  }

                  const number = allowFloat ? parseFloat(value) : parseInt(value);

                  onChange?.(number);
                }
              }}
              onBlur={e => {
                if (type === 'number') {
                  if (e.target.value === '-' || e.target.value === '+') {
                    onChange?.(null);
                  }
                }

                rest.onBlur?.(e);
              }}
              {...rest}
            />
            {renderSuffix && <div className="input-suffix-custom">{renderSuffix()}</div>}
          </div>
        </div>
      </div>
      {!hideErrorMessages && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default Input;
