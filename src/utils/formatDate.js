export function formatDate(dateString) {
    const createdDate = new Date(dateString);
    const now = new Date();

    const diffMs = now.getTime() - createdDate.getTime();

    if (diffMs < 0) return 'Vừa mới tham gia';

    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffYears = Math.floor(diffDays / 365);

    if (diffYears >= 1) {
        return `${diffYears} năm trước`;
    } else if (diffDays >= 1) {
        return `${diffDays} ngày trước`;
    } else {
        return `${diffHours} giờ trước`;
    }
}
