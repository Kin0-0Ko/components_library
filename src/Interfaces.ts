// Button component interfaces 

type ExcludeFromTuple<T extends any[], U> = {
	[K in keyof T]: T[K] extends U ? never : T[K];
  }[number];
   
  type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
	? E extends string
	  ? Record<E, U> & { [k in ExcludeFromTuple<T, E>]?: never }
	  : never
	: never & {};
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
Partial<{
  outline?: boolean;
  rounded?: boolean;
}> &
Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean>;

// Accordion component interfaces 
interface AccordionItem {
	id: number
	title: string
	label: string
}

export interface AccordionProps {
	items: AccordionItem[]
}


// DropDown component 

export interface DropDownItem{
	label: string
	value: string
}

export interface DropDownProps {
	options: DropDownItem[]
	value: DropDownItem | null
	onChange: (option: DropDownItem) => void
}

// Panel component 

export interface PanelProps {
	className: string
	children: any
	[x:string]: any;
}

// Navigation provider

export interface NavigationProviderProps {
	children: any
}

export interface NavigationContextInterface {
	currentPath: string,
	navigate: (to: string) => void
}

// Link component 
export interface LinkProps {
	to: string
	children?: React.ReactNode,
	className?: string 
	activeClassName?: string
}

// Route component 
export interface RouteProps {
	path: string
	children: any

}

// Modal Comment

export interface ModalProps {
	onClose : () => void
	children: React.ReactNode
	actionBar: any; 

}

// Table component 
interface fruit {
	name: string,
	color: string,
	score: number
}

export interface ConfigEL {
	label: string
	render: (column: any) => any
	sortValue: (column: any) => number | string
	header?: () => any
}
export interface TableProps {
	data: fruit[]
	config: ConfigEL[]
}

//Counter component
export interface CounterProps {
	initialCount: number
}
