interface InfraConfigurations {
    element?: HTMLElement;
}

/**
 * A model representing all possible configurations
 * that can be done from embedded script. Those settings
 * are passed around in application via Context.
 */
// Todo: fix configuration
export interface Product {
    title: string;
    code: string;
}
export interface AppConfigurations {
    debug: boolean;
    serviceBaseUrl: string;
    minimized: boolean;
    disableDarkMode: boolean;
    text?: {
        formTitle?: string;
        formSubTitle?: string;
    };
    styles?: {
        classNameContainer?: string;
    };
    products: Product[];
}

export type Configurations = InfraConfigurations & AppConfigurations;

export interface FormModel {
    serviceType: string;
    zipCode: string;
    product: string;
}

export interface WidgetApi {
    validateForm: (model: FormModel) => Promise<void>;
}

export interface Globals {
    widgetOpen: boolean;
    setWidgetOpen: (open: boolean) => void;
}
