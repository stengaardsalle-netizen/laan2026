'use client'

import { useState, useEffect } from 'react'
import { 
  Calculator, 
  DollarSign,
  Clock,
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react'

export default function LoanCalculator() {
  const [amount, setAmount] = useState(100000)
  const [interestRate, setInterestRate] = useState(8)
  const [termYears, setTermYears] = useState(5)
  const [monthlyPayment, setMonthlyPayment] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [totalInterest, setTotalInterest] = useState(0)

  useEffect(() => {
    const calculateLoan = () => {
      const principal = amount
      const monthlyRate = interestRate / 100 / 12
      const numPayments = termYears * 12

      if (monthlyRate === 0) {
        const payment = principal / numPayments
        setMonthlyPayment(payment)
        setTotalCost(principal)
        setTotalInterest(0)
      } else {
        const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                        (Math.pow(1 + monthlyRate, numPayments) - 1)
        const totalPayments = payment * numPayments
        
        setMonthlyPayment(payment)
        setTotalCost(totalPayments)
        setTotalInterest(totalPayments - principal)
      }
    }

    calculateLoan()
  }, [amount, interestRate, termYears])

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('da-DK', {
      style: 'currency',
      currency: 'DKK',
      maximumFractionDigits: 0,
    }).format(value)
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-50 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-3xl"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl -translate-y-32 translate-x-32"></div>
      
      <div className="relative">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-indigo-100 px-6 py-3 rounded-2xl mb-4">
            <Calculator className="h-6 w-6 text-blue-600" />
            <span className="font-semibold text-blue-800">Beregn dit lån</span>
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Se præcis hvad dit lån vil koste
          </h3>
          <p className="text-gray-600 mt-2">Juster værdierne og se øjeblikkeligt hvad det betyder for din økonomi</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <div className="space-y-8">
            <div className="relative">
              <label htmlFor="amount" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <DollarSign className="h-5 w-5 text-blue-600" />
                Lånebeløb
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="amount"
                  min="1000"
                  max="10000000"
                  step="1000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="block w-full rounded-2xl border-0 bg-white/50 backdrop-blur-sm pl-4 pr-16 py-4 text-lg font-semibold shadow-lg ring-1 ring-white/20 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 font-medium">
                  DKK
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="1000000"
                step="1000"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-blue-200 to-indigo-300 rounded-lg appearance-none cursor-pointer mt-4 slider-modern"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1.000 kr</span>
                <span>1.000.000 kr</span>
              </div>
            </div>

            <div className="relative">
              <label htmlFor="interestRate" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                Årlig rente
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="interestRate"
                  min="0.1"
                  max="30"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="block w-full rounded-2xl border-0 bg-white/50 backdrop-blur-sm pl-4 pr-16 py-4 text-lg font-semibold shadow-lg ring-1 ring-white/20 placeholder:text-gray-400 focus:ring-2 focus:ring-green-500/50 transition-all duration-300"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 font-medium">
                  %
                </span>
              </div>
              <input
                type="range"
                min="0.1"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-green-200 to-emerald-300 rounded-lg appearance-none cursor-pointer mt-4 slider-modern"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>0.1%</span>
                <span>20%</span>
              </div>
            </div>

            <div className="relative">
              <label htmlFor="termYears" className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                <Clock className="h-5 w-5 text-purple-600" />
                Løbetid
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="termYears"
                  min="1"
                  max="30"
                  step="1"
                  value={termYears}
                  onChange={(e) => setTermYears(Number(e.target.value))}
                  className="block w-full rounded-2xl border-0 bg-white/50 backdrop-blur-sm pl-4 pr-16 py-4 text-lg font-semibold shadow-lg ring-1 ring-white/20 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 font-medium">
                  år
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={termYears}
                onChange={(e) => setTermYears(Number(e.target.value))}
                className="w-full h-3 bg-gradient-to-r from-purple-200 to-pink-300 rounded-lg appearance-none cursor-pointer mt-4 slider-modern"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>1 år</span>
                <span>30 år</span>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-4 py-2 rounded-xl">
                <Sparkles className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">Din beregning</span>
              </div>
            </div>
            
            {/* Main result card */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20"></div>
              <div className="relative">
                <div className="text-center">
                  <p className="text-blue-100 text-sm font-medium mb-2">Månedlig ydelse</p>
                  <p className="text-4xl font-bold mb-1">
                    {formatCurrency(monthlyPayment)}
                  </p>
                  <p className="text-blue-100 text-sm">pr. måned i {termYears} år</p>
                </div>
              </div>
            </div>

            {/* Breakdown cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Samlet tilbagebetaling:</span>
                  <span className="text-xl font-bold text-gray-900">
                    {formatCurrency(totalCost)}
                  </span>
                </div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Samlede renter:</span>
                  <span className="text-xl font-bold text-orange-600">
                    {formatCurrency(totalInterest)}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button className="group w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3">
                <Sparkles className="h-6 w-6" />
                Sammenlign lånetilbud nu
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <p className="text-center text-sm text-gray-500 mt-3">
                ✨ Dette er kun et estimat. Faktiske vilkår kan variere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}