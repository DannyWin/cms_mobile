const formatDate = (date: Date): string => {
    return date?.toString().replace(/T|(\..+)/g, " ");
};

export { formatDate };
