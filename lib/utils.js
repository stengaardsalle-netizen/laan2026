import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind class merger utility
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Danish currency formatter
export function formatCurrency(amount, options = {}) {
  return new Intl.NumberFormat('da-DK', {
    style: 'currency',
    currency: 'DKK',
    maximumFractionDigits: 0,
    ...options,
  }).format(amount)
}

// Number formatter with Danish locale
export function formatNumber(value, options = {}) {
  return new Intl.NumberFormat('da-DK', options).format(value)
}

// Percentage formatter
export function formatPercentage(value, options = {}) {
  return new Intl.NumberFormat('da-DK', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
    ...options,
  }).format(value / 100)
}

// Danish date formatter
export function formatDate(date) {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('da-DK', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Loan calculation functions
export function calculateLoan({ principal, interestRate, termYears }) {
  const monthlyRate = interestRate / 100 / 12
  const numPayments = termYears * 12

  let monthlyPayment
  
  if (monthlyRate === 0) {
    monthlyPayment = principal / numPayments
  } else {
    monthlyPayment = (
      principal * 
      monthlyRate * 
      Math.pow(1 + monthlyRate, numPayments)
    ) / (Math.pow(1 + monthlyRate, numPayments) - 1)
  }

  const totalCost = monthlyPayment * numPayments
  const totalInterest = totalCost - principal

  return {
    principal,
    interestRate,
    termYears,
    monthlyPayment,
    totalCost,
    totalInterest,
  }
}

// ÅOP calculation (simplified version)
export function calculateAOP({ principal, totalCost, termYears, fees = 0 }) {
  const totalAmount = totalCost + fees
  const rate = (totalAmount / principal) ** (1 / termYears) - 1
  return rate * 100
}

// Validate Danish CPR number (basic validation)
export function validateCPR(cpr) {
  const cleanCPR = cpr.replace(/\D/g, '')
  if (cleanCPR.length !== 10) return false
  
  // Check if it's a valid date format (DDMMYY)
  const day = parseInt(cleanCPR.substring(0, 2), 10)
  const month = parseInt(cleanCPR.substring(2, 4), 10)
  
  if (day < 1 || day > 31) return false
  if (month < 1 || month > 12) return false
  
  return true
}

// Format CPR number for display
export function formatCPR(cpr) {
  const cleanCPR = cpr.replace(/\D/g, '')
  if (cleanCPR.length === 10) {
    return `${cleanCPR.substring(0, 6)}-${cleanCPR.substring(6)}`
  }
  return cpr
}

// Validate Danish phone number
export function validatePhone(phone) {
  const cleanPhone = phone.replace(/\D/g, '')
  return cleanPhone.length === 8
}

// Format phone number for display
export function formatPhone(phone) {
  const cleanPhone = phone.replace(/\D/g, '')
  if (cleanPhone.length === 8) {
    return `${cleanPhone.substring(0, 2)} ${cleanPhone.substring(2, 4)} ${cleanPhone.substring(4, 6)} ${cleanPhone.substring(6)}`
  }
  return phone
}

// Email validation
export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Debounce function for search inputs
export function debounce(func, wait) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Generate slug from string
export function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/[^\w\s-]/g, '') // Remove special chars
    .replace(/[\s_-]+/g, '-') // Replace spaces/underscores with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
}

// Calculate age from CPR number
export function calculateAgeFromCPR(cpr) {
  const cleanCPR = cpr.replace(/\D/g, '')
  if (cleanCPR.length !== 10) return null

  const day = parseInt(cleanCPR.substring(0, 2), 10)
  const month = parseInt(cleanCPR.substring(2, 4), 10)
  let year = parseInt(cleanCPR.substring(4, 6), 10)
  
  // Determine century based on 7th digit
  const centuryDigit = parseInt(cleanCPR.substring(6, 7), 10)
  if (centuryDigit >= 0 && centuryDigit <= 3) {
    year += 1900
  } else if (centuryDigit >= 4 && centuryDigit <= 9) {
    if (year <= 36) {
      year += 2000
    } else {
      year += 1900
    }
  }

  const birthDate = new Date(year, month - 1, day)
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1
  }
  
  return age
}

// Check if user is on mobile device
export function isMobile() {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// Generate meta tags for SEO
export function generateMetaTags(data) {
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.url,
      type: data.type || 'website',
      images: data.image ? [{ url: data.image }] : [],
      locale: 'da_DK',
      siteName: 'Lån.dk',
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: data.image ? [data.image] : [],
    },
  }
}

// Common loan constants
export const LOAN_TYPES = {
  HOUSING: 'housing',
  CONSUMER: 'consumer',
  QUICK: 'quick',
  CONSOLIDATION: 'consolidation',
  BUSINESS: 'business',
}
