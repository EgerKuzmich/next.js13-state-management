import { FC, HTMLAttributes, memo, PropsWithChildren, useCallback, useRef, ReactNode } from 'react';
import { Button, ButtonExtendedProps, Spinner } from 'grommet';
import { TFetchStatus } from 'utils/type';
import { FETCH_STATUS } from 'utils/constants';
import { useGetSet, useMount, useUpdateEffect } from 'react-use';
import { toErrorWithMessage } from 'utils/error-handling';

export type TSubmitRootButtonAttributes = Omit<
  HTMLAttributes<HTMLButtonElement>,
  'onSubmit' | 'onClick' | 'onError' | 'disabled'
>;

type TSubmitButtonBody = Record<TFetchStatus, string>;

interface ISubmitButtonStatusProps extends PropsWithChildren {
  status: TFetchStatus;
  body?: Partial<TSubmitButtonBody>;
  renderBody?: (status: TFetchStatus) => ReactNode;
}

export interface ISubmitButtonProps<SubmitResponse>
  extends PropsWithChildren,
    Omit<ButtonExtendedProps, 'children' | 'ref' | 'as'> {
  cmp: FC<ButtonExtendedProps>;
  status: TFetchStatus;
  body: Partial<TSubmitButtonBody>;
  disableOnErrors: boolean;
  disabled: boolean;
  onSubmit: () => Promise<SubmitResponse>;
  onBeforeSubmit?: () => void | Promise<void>;
  onAfterSubmit: (res?: unknown) => void | Promise<void>;
  onFinally: () => void | Promise<void>;
  onError: (error: unknown) => void | Promise<void>;
  renderBody?: (status: TFetchStatus) => ReactNode;
}

const DEF_STATUS = {
  FULFILLED: 'Сохранено',
  REJECTED: 'Ошибка',
  IDLE: 'Сохранить',
} as const;

const DEF_STYLE = { display: 'flex', justifyContent: 'center', minWidth: '145px' };

const DELAY = 1500;

const isDisabled = (status: TFetchStatus, disableOnErrors: boolean) =>
  disableOnErrors ? status === FETCH_STATUS.REJECTED : status === FETCH_STATUS.PENDING;

const Status = memo(({ status, body, renderBody }: ISubmitButtonStatusProps) => {
  switch (status) {
    case FETCH_STATUS.PENDING:
      return <>{renderBody?.(FETCH_STATUS.PENDING) ?? body?.[FETCH_STATUS.PENDING] ?? <Spinner />}</>;
    case FETCH_STATUS.FULFILLED:
      return <>{renderBody?.(FETCH_STATUS.FULFILLED) ?? body?.[FETCH_STATUS.FULFILLED] ?? <Spinner />}</>;
    case FETCH_STATUS.REJECTED:
      return <>{renderBody?.(FETCH_STATUS.REJECTED) ?? body?.[FETCH_STATUS.REJECTED] ?? DEF_STATUS.REJECTED}</>;
    default:
      return <>{renderBody?.(FETCH_STATUS.IDLE) ?? body?.[FETCH_STATUS.IDLE] ?? DEF_STATUS.IDLE}</>;
  }
});

Status.displayName = 'SubmitStatus';

export function SubmitButton<SubmitResponse>(props: Partial<ISubmitButtonProps<SubmitResponse>>) {
  const {
    cmp: Component = Button,
    status = FETCH_STATUS.IDLE,
    body,
    disableOnErrors = false,
    disabled: initialDisabled = false,
    onSubmit,
    onBeforeSubmit,
    onAfterSubmit,
    onFinally,
    onError,
    renderBody,
    children,
    ...restProps
  } = props;

  const [getStatus, setStatus] = useGetSet(status);

  const resetTimeout = useRef<NodeJS.Timeout>();

  const disabled = initialDisabled || isDisabled(getStatus(), disableOnErrors);

  const onResetStatus = () => {
    setTimeout(() => setStatus(FETCH_STATUS.IDLE), DELAY);
  };

  const submitHandler = useCallback(async () => {
    setStatus(FETCH_STATUS.PENDING);

    try {
      onBeforeSubmit?.();

      const res = await onSubmit?.();

      setStatus(FETCH_STATUS.FULFILLED);

      onAfterSubmit?.(res);

      onResetStatus();
      return;
    } catch (error: unknown) {
      const errorWithMessage = toErrorWithMessage(error);

      console.error(errorWithMessage.message);

      setStatus(FETCH_STATUS.REJECTED);

      onError?.(errorWithMessage);

      onResetStatus();
    } finally {
      onFinally?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onSubmit, onAfterSubmit, onError, onResetStatus, onFinally]);

  useUpdateEffect(() => {
    setStatus(status);
  }, [status]);

  useMount(() => {
    clearTimeout(resetTimeout.current);
  });

  return (
    <Component
      busy={disabled}
      disabled={disabled}
      onClick={submitHandler}
      label={<Status status={getStatus()} body={body} renderBody={renderBody} />}
      style={DEF_STYLE}
      {...restProps}
    >
      {children}
    </Component>
  );
}
