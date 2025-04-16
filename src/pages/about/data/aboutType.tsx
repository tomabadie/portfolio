export interface AboutParagraphProps {
    id: string;
    content: string;
}

export interface AboutItemProps {
    id: string;
    title: string;
    content: AboutParagraphProps[];
}

export interface AboutProps {
    aboutDataList: AboutItemProps[];
}