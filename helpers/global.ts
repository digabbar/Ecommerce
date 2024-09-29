import { scaleFontSize } from './scaling';

interface Global {
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        error: string;
        header: string;
        text: string;
        background: string;
        border:string;
        white:string;
        black10:string;
    };
    fontSize: {
        f11: number;
        f12: number;
        f14: number;
        f16: number;
        f18: number;
        f20: number;
        f24: number;
        f30: number;
    };
    getFontFamily( weight?: string | number,baseFont?: string): string;
}

const global: Global = {
    color:  {
        primary: '#007BFF', // Primary Blue
        secondary: '#6C757D', // Medium Gray
        success: '#28A745', // Green
        warning: '#FFC107', // Yellow
        error: '#DC3545', // Red
        header: '#343A40', // Dark Gray
        text: '#212529', // Near Black
        background: '#F8F9FA', // Light Gray
        border: '#DEE2E6', // Gray
        white:'#fff',
        black10:'rgba(0,0,0,0.1)',
    },
    fontSize: {
        f11: scaleFontSize(11),
        f12: scaleFontSize(12),
        f14: scaleFontSize(14),
        f16: scaleFontSize(16),
        f18: scaleFontSize(18),
        f20: scaleFontSize(20),
        f24: scaleFontSize(24),
        f30: scaleFontSize(30),
    },
    getFontFamily(weight?: string | number,baseFont: string = 'Inter'): string {
        const weightStr = typeof weight === 'number' ? weight.toString() : weight;

        switch (weightStr) {
            case '100':
                return `${baseFont}-Thin`;
            case '200':
                return `${baseFont}-ExtraLight`;
            case '300':
                return `${baseFont}-Light`;
            case 'normal':
            case '400':
                return `${baseFont}-Regular`;
            case '500':
                return `${baseFont}-Medium`;
            case '600':
                return `${baseFont}-SemiBold`;
            case 'bold':
            case '700':
                return `${baseFont}-Bold`;
            case '800':
                return `${baseFont}-ExtraBold`;
            case '900':
                return `${baseFont}-Black`;
            default:
                return `${baseFont}-Regular`;
        }
    },
};

export default global;
