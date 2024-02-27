import { FC } from 'react'
import { IIconsProps } from 'src/shared/lib'

export const Icon: FC<IIconsProps> = ({ icons, className }) => {
    switch (icons) {
        case 'drop':
            return (
                <svg className={className} viewBox="0 0 32 32"  xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g id="Energy20"></g> <g id="Energy19"></g> <g id="Energy18"></g> 
                        <g id="Energy17"></g> <g id="Energy16"></g> 
                        <g id="Energy15"></g> <g id="Energy14"></g>
                        <g id="Energy13"></g> <g id="Energy12"></g> 
                        <g id="Energy11"> 
                            <g> 
                                <path d="M28,19c0,6.62-5.38,12-12,12S4,25.62,4,19C4,12.58,14.83,1.75,15.3,1.29c0.39-0.39,1.01-0.39,1.4,0 C17.17,1.75,28,12.58,28,19z" fill="#0077ff"></path>
                            </g> 
                            <g> 
                                <path d="M14,26c-3.3086,0-6-2.6914-6-6c0-0.5527,0.4478-1,1-1s1,0.4473,1,1c0,2.2061,1.7944,4,4,4 c0.5522,0,1,0.4473,1,1S14.5522,26,14,26z" fill="#FFFFFF"></path> 
                            </g> 
                        </g> 
                        <g id="Energy10"></g> <g id="Energy09"></g> 
                        <g id="Energy08"></g> <g id="Energy07"></g> 
                        <g id="Energy06"></g> <g id="Energy05"></g> 
                        <g id="Energy04"></g> <g id="Energy03"></g> 
                        <g id="Energy02"></g> <g id="Energy01"></g> 
                    </g>
                </svg>
            );
        case 'cup': 
            return (
                <svg className={className}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512" >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M436.544,99.087H325.872v53.897h110.671c11.888,0,21.559,9.672,21.559,21.559v121.118 c0,11.888-9.672,21.559-21.559,21.559H325.872v53.897h110.671c41.674,0,75.456-33.783,75.456-75.456V174.543 C512,132.869,478.217,99.087,436.544,99.087z"></path>
                        <path d="M0,0v460.259C0,488.835,23.165,512,51.741,512h264.185c28.576,0,51.741-23.165,51.741-51.741V0H0z"></path> 
                        <path d="M183.834,0H0v460.259C0,488.835,23.165,512,51.741,512h132.093V0z"></path> 
                        <path d="M0,424.229v36.03C0,488.835,23.165,512,51.741,512h264.185c28.576,0,51.741-23.165,51.741-51.741 v-36.03H0z"></path> 
                        <path d="M183.834,424.229H0v36.03C0,488.835,23.165,512,51.741,512h132.093V424.229z"></path> 
                    </g>
                </svg>
            );
        case 'heart': 
            return (
                <svg className={className} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path d="M2.34594 11.2501C2.12458 10.5866 2 9.92019 2 9.26044C2 3.3495 7.50016 0.662637 12 5.49877C16.4998 0.662637 22 3.34931 22 9.2604C22 9.92017 21.8754 10.5866 21.6541 11.2501H18.6361L18.5241 11.25C17.9784 11.2491 17.4937 11.2483 17.0527 11.4447C16.6116 11.6411 16.2879 12.002 15.9233 12.4084L15.8485 12.4918L14.8192 13.6354C14.7426 13.7205 14.68 13.79 14.6247 13.8493C14.5723 13.7879 14.5128 13.7159 14.4401 13.6277L10.8889 9.32318C10.7493 9.15391 10.6 8.97281 10.454 8.8384C10.2839 8.68188 10.0325 8.50581 9.68096 8.4847C9.32945 8.46359 9.05875 8.60829 8.87115 8.74333C8.71006 8.8593 8.54016 9.02123 8.38136 9.17258L6.85172 10.6294C6.37995 11.0787 6.28151 11.1553 6.17854 11.1964C6.07557 11.2376 5.9515 11.2501 5.3 11.2501H2.34594Z" fill="#616570"></path> '
                        <path d="M3.00441 12.7501C4.38539 15.312 6.93029 17.7142 8.96173 19.3707C10.2937 20.4569 10.9597 21 12 21C13.0403 21 13.7063 20.4569 15.0383 19.3707C17.0697 17.7142 19.6146 15.312 20.9956 12.7501H18.6361C17.9119 12.7501 17.7746 12.7652 17.6629 12.815C17.5513 12.8647 17.4481 12.9567 16.9634 13.4952L15.9086 14.6672C15.7507 14.8428 15.5839 15.0283 15.4235 15.1628C15.2384 15.318 14.9627 15.4921 14.5896 15.4841C14.2166 15.476 13.9488 15.2904 13.7704 15.1274C13.616 14.9862 13.4574 14.7938 13.3074 14.6118L9.75487 10.3057C9.68734 10.2239 9.63239 10.1573 9.5839 10.1005C9.52897 10.1511 9.46645 10.2106 9.38961 10.2838L7.81346 11.785C7.4575 12.125 7.14165 12.4267 6.73563 12.5892C6.32961 12.7516 5.89282 12.7509 5.40054 12.7502L3.00441 12.7501Z" fill="#616570"></path> 
                        </g>
                    </svg>
            );
    }

}
