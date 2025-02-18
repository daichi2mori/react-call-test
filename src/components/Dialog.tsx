import { createCallable } from "react-call";

type Color = "emerald" | "pink" | "blue" | "red" | "violet" | "yellow";

type Props = React.PropsWithChildren<{
	color: Color;
	ended: boolean;
}>;

export const MyDialog = createCallable<void, boolean>(
	({ call }) => (
		<Dialog color="emerald" ended={call.ended}>
			<DialogTitle>Code your UI component</DialogTitle>
			<DialogText>Let react-call provide the ergonomics 😉</DialogText>
			<DialogText>
				Return anything via{" "}
				<code className="text-fuchsia-400">call.end(value)</code> ↩️
			</DialogText>
			<p className="text-sm/6 text-yellow-200/75">
				💡 *TIP* see console for full demo output
			</p>
			<DialogActions>
				<DialogButton color="emerald" onClick={() => call.end(true)}>
					<code>⭕️ true</code>
				</DialogButton>
				<DialogButton
					color="emerald"
					hoverColor="red"
					onClick={() => call.end(false)}
				>
					<code>❌ false</code>
				</DialogButton>
			</DialogActions>
		</Dialog>
	),
	300,
);

function Dialog({ children }: Props) {
	return (
		<>
			<div className="flex min-h-full items-center justify-center p-4">
				<div>{children}</div>
			</div>
		</>
	);
}

function DialogTitle({ children }: React.PropsWithChildren) {
	return <h3 className="text-base/7 font-medium text-white">{children}</h3>;
}

function DialogText({ children }: React.PropsWithChildren) {
	return <p className="text-sm/6 text-white/75">{children}</p>;
}

function DialogActions({ children }: React.PropsWithChildren) {
	return <div className="pt-2 flex gap-4">{children}</div>;
}

function DialogButton({
	children,
	onClick,
	type = "button",
}: React.PropsWithChildren<{
	onClick?: React.DOMAttributes<HTMLButtonElement>["onClick"];
	color: Color;
	hoverColor?: Color;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
	shrink?: boolean;
}>) {
	return (
		<button type={type} onClick={onClick}>
			{children}
		</button>
	);
}
