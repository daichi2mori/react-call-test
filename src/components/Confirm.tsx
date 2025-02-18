import { createCallable } from "react-call";

type ConfirmProps = {
	message: string;
};

type Response = boolean;

export const Confirm = createCallable<ConfirmProps, Response>(
	({ call, message }) => (
		<dialog>
			<p>{message}</p>
			<button type="button" onClick={() => call.end(true)}>
				Yes
			</button>
			<button type="button" onClick={() => call.end(false)}>
				No
			</button>
		</dialog>
	),
);
