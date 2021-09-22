interface InfraConfigurations {
    element?: HTMLElement;
}

/**
 * A model representing all possible configurations
 * that can be done from embedded script. Those settings
 * are passed around in application via Context.
 */
export interface AppConfigurations {
    debug: boolean;
    serviceBaseUrl: string;
    minimized: boolean;
    disableDarkMode: boolean;
    text: {
        minimizedTitle?: string;
        formTitle?: string;
        formSubTitle?: string;
        thankYouTitle?: string;
        thankYouBody?: string;
        faqTitle?: string;
    };
    styles: {
        classNameContainer?: string;
    };
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