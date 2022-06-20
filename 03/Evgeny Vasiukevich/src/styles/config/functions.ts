export function mediaMax(screen: string, content: string): string {
    return `@media (max-width: ${screen}) {
        ${content}
    }`
}