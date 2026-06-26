const WORD_BOUNDARY_PATTERN = /([a-z0-9])([A-Z])/g;
const ACRONYM_BOUNDARY_PATTERN = /([A-Z]+)([A-Z][a-z])/g;
const SEPARATOR_PATTERN = /[_-]+/g;
const WHITESPACE_PATTERN = /\s+/g;

const splitWords = (value: string): string[] => {
    const normalizedValue = value
        .trim()
        .replace(SEPARATOR_PATTERN, ' ')
        .replace(ACRONYM_BOUNDARY_PATTERN, '$1 $2')
        .replace(WORD_BOUNDARY_PATTERN, '$1 $2');

    return normalizedValue.split(WHITESPACE_PATTERN).filter(Boolean);
};

const capitalizeWord = (value: string): string => {
    if (value.length === 0) {
        return value;
    }

    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
};

/**
 * Converts a string into camelCase.
 *
 * @description Splits a string by spaces, underscores, hyphens, and case boundaries
 * before combining the words into camelCase.
 *
 * @param value - The string to transform.
 * @returns The transformed camelCase string.
 *
 * @example
 * toCamelCase('hello world')
 * // 'helloWorld'
 *
 * @example
 * toCamelCase('user_profile ID')
 * // 'userProfileId'
 */
export const toCamelCase = (value: string): string => {
    const words = splitWords(value);

    if (words.length === 0) {
        return '';
    }

    return words
        .map((word, index) => {
            const normalizedWord = word.toLowerCase();

            return index === 0 ? normalizedWord : capitalizeWord(normalizedWord);
        })
        .join('');
};

/**
 * Converts a string into PascalCase.
 *
 * @description Splits a string by spaces, underscores, hyphens, and case boundaries
 * before combining the words into PascalCase.
 *
 * @param value - The string to transform.
 * @returns The transformed PascalCase string.
 *
 * @example
 * toPascalCase('hello world')
 * // 'HelloWorld'
 *
 * @example
 * toPascalCase('user_profile ID')
 * // 'UserProfileId'
 */
export const toPascalCase = (value: string): string => {
    return splitWords(value).map((word) => capitalizeWord(word)).join('');
};

/**
 * Converts a string into kebab-case.
 *
 * @description Splits a string by spaces, underscores, hyphens, and case boundaries
 * before joining the words with hyphens.
 *
 * @param value - The string to transform.
 * @returns The transformed kebab-case string.
 *
 * @example
 * toKebabCase('Hello World')
 * // 'hello-world'
 *
 * @example
 * toKebabCase('user_profile ID')
 * // 'user-profile-id'
 */
export const toKebabCase = (value: string): string => {
    return splitWords(value).map((word) => word.toLowerCase()).join('-');
};

/**
 * Converts a string into snake_case.
 *
 * @description Splits a string by spaces, underscores, hyphens, and case boundaries
 * before joining the words with underscores.
 *
 * @param value - The string to transform.
 * @returns The transformed snake_case string.
 *
 * @example
 * toSnakeCase('Hello World')
 * // 'hello_world'
 *
 * @example
 * toSnakeCase('user-profile ID')
 * // 'user_profile_id'
 */
export const toSnakeCase = (value: string): string => {
    return splitWords(value).map((word) => word.toLowerCase()).join('_');
};

/**
 * Converts a string into Title Case.
 *
 * @description Splits a string by spaces, underscores, hyphens, and case boundaries
 * before capitalizing each word and joining them with spaces.
 *
 * @param value - The string to transform.
 * @returns The transformed Title Case string.
 *
 * @example
 * toTitleCase('hello world')
 * // 'Hello World'
 *
 * @example
 * toTitleCase('user_profile ID')
 * // 'User Profile Id'
 */
export const toTitleCase = (value: string): string => {
    return splitWords(value).map((word) => capitalizeWord(word)).join(' ');
};

/**
 * Converts all characters in a string to uppercase.
 *
 * @description Returns a copy of the string with every character converted to uppercase.
 *
 * @param value - The string to transform.
 * @returns The uppercase string.
 *
 * @example
 * toUpperCase('Porterman')
 * // 'PORTERMAN'
 */
export const toUpperCase = (value: string): string => {
    return value.toUpperCase();
};

/**
 * Converts all characters in a string to lowercase.
 *
 * @description Returns a copy of the string with every character converted to lowercase.
 *
 * @param value - The string to transform.
 * @returns The lowercase string.
 *
 * @example
 * toLowerCase('Porterman')
 * // 'porterman'
 */
export const toLowerCase = (value: string): string => {
    return value.toLowerCase();
};

/**
 * Capitalizes the first character of a string.
 *
 * @description Uppercases only the first character and leaves the remaining
 * characters unchanged.
 *
 * @param value - The string to transform.
 * @returns The string with the first character capitalized.
 *
 * @example
 * capitalize('porterman')
 * // 'Porterman'
 *
 * @example
 * capitalize('hello WORLD')
 * // 'Hello WORLD'
 */
export const capitalize = (value: string): string => {
    if (value.length === 0) {
        return value;
    }

    return value.charAt(0).toUpperCase() + value.slice(1);
};

/**
 * Converts the first character of a string to lowercase.
 *
 * @description Lowercases only the first character and leaves the remaining
 * characters unchanged.
 *
 * @param value - The string to transform.
 * @returns The string with the first character converted to lowercase.
 *
 * @example
 * uncapitalize('Porterman')
 * // 'porterman'
 *
 * @example
 * uncapitalize('Hello WORLD')
 * // 'hello WORLD'
 */
export const uncapitalize = (value: string): string => {
    if (value.length === 0) {
        return value;
    }

    return value.charAt(0).toLowerCase() + value.slice(1);
};

/**
 * Removes whitespace from both ends of a string.
 *
 * @description Trims leading and trailing whitespace without changing the content in the middle.
 *
 * @param value - The string to trim.
 * @returns The trimmed string.
 *
 * @example
 * trim('  hello world  ')
 * // 'hello world'
 */
export const trim = (value: string): string => {
    return value.trim();
};

/**
 * Trims a string and collapses repeated internal whitespace.
 *
 * @description Replaces runs of spaces, tabs, and line breaks with a single space,
 * then trims the result.
 *
 * @param value - The string to normalize.
 * @returns The normalized string with single spaces between words.
 *
 * @example
 * trimAll('  hello   world  ')
 * // 'hello world'
 *
 * @example
 * trimAll('hello\\n\\tworld')
 * // 'hello world'
 */
export const trimAll = (value: string): string => {
    return value.trim().replace(WHITESPACE_PATTERN, ' ');
};

/**
 * Checks whether a string is exactly empty.
 *
 * @description Returns `true` only when the string length is zero.
 *
 * @param value - The string to inspect.
 * @returns `true` when the string is empty, otherwise `false`.
 *
 * @example
 * isEmpty('')
 * // true
 *
 * @example
 * isEmpty(' ')
 * // false
 */
export const isEmpty = (value: string): boolean => {
    return value.length === 0;
};

/**
 * Checks whether a string is blank.
 *
 * @description Returns `true` when the string is empty or contains only whitespace characters.
 *
 * @param value - The string to inspect.
 * @returns `true` when the string is blank, otherwise `false`.
 *
 * @example
 * isBlank('')
 * // true
 *
 * @example
 * isBlank('   ')
 * // true
 *
 * @example
 * isBlank('hello')
 * // false
 */
export const isBlank = (value: string): boolean => {
    return trim(value).length === 0;
};

/**
 * Shortens a string to a maximum length.
 *
 * @description Returns the original string when it already fits within the limit.
 * Otherwise, it truncates the string and appends a suffix.
 *
 * @param value - The string to truncate.
 * @param maxLength - The maximum length of the returned string.
 * @param suffix - The suffix appended when truncation happens.
 * @returns The original or truncated string.
 *
 * @example
 * truncate('Porterman helper utilities', 12)
 * // 'Porterman...'
 *
 * @example
 * truncate('Porterman helper utilities', 16, ' (more)')
 * // 'Porterman (more)'
 */
export const truncate = (
    value: string,
    maxLength: number = 30,
    suffix: string = '...'
): string => {
    if (maxLength <= 0) {
        return '';
    }

    if (value.length <= maxLength) {
        return value;
    }

    if (suffix.length >= maxLength) {
        return suffix.slice(0, maxLength);
    }

    return value.slice(0, maxLength - suffix.length) + suffix;
};

/**
 * Checks whether a string contains a given substring.
 *
 * @description Performs a case-sensitive substring search.
 *
 * @param value - The string to inspect.
 * @param search - The substring to look for.
 * @returns `true` when the substring is found, otherwise `false`.
 *
 * @example
 * contains('Porterman', 'term')
 * // true
 *
 * @example
 * contains('Porterman', 'TERM')
 * // false
 */
export const contains = (value: string, search: string): boolean => {
    return value.includes(search);
};

/**
 * Checks whether a string starts with a given substring.
 *
 * @description Performs a case-sensitive prefix check.
 *
 * @param value - The string to inspect.
 * @param search - The prefix to look for.
 * @returns `true` when the string starts with the substring, otherwise `false`.
 *
 * @example
 * startsWith('Porterman', 'Port')
 * // true
 *
 * @example
 * startsWith('Porterman', 'port')
 * // false
 */
export const startsWith = (value: string, search: string): boolean => {
    return value.startsWith(search);
};

/**
 * Checks whether a string ends with a given substring.
 *
 * @description Performs a case-sensitive suffix check.
 *
 * @param value - The string to inspect.
 * @param search - The suffix to look for.
 * @returns `true` when the string ends with the substring, otherwise `false`.
 *
 * @example
 * endsWith('Porterman', 'man')
 * // true
 *
 * @example
 * endsWith('Porterman', 'MAN')
 * // false
 */
export const endsWith = (value: string, search: string): boolean => {
    return value.endsWith(search);
};
