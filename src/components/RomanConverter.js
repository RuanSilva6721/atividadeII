import React, { Component } from 'react';
import { intToRoman } from '../utils/romanUtils';
import { motion } from 'framer-motion';
import './RomanConverter.css';  

class RomanConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      roman: '',
      showRoman: false
    };
  }

  handleChange = (e) => {
    const num = parseInt(e.target.value, 10);
    if (isNaN(num)) {
      this.setState({ number: '', roman: '' });
    } else {
      this.setState({
        number: num,
        roman: intToRoman(num),
        showRoman: true
      });
      setTimeout(() => this.setState({ showRoman: false }), 10000);
    }
  };

  render() {
    const { number, roman, showRoman } = this.state;

    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-50 to-teal-100 p-6 relative">
        <div className="bg-white shadow-xl rounded-lg max-w-md w-full p-8 border border-gray-200 transform transition-transform hover:scale-105 hover:shadow-2xl relative">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center transition-transform duration-300 hover:translate-x-2 hover:text-teal-600">
            Conversor de Números Romanos
          </h1>
          <input
            type="number"
            value={number}
            onChange={this.handleChange}
            placeholder="Digite um número"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300 ease-in-out transform hover:scale-105 p-12"
          />
          <div className="relative mt-12 text-3xl font-semibold text-gray-800 text-center">
            {showRoman && (
              <motion.div
                initial={{ opacity: 0, rotate: 0, y: -200 }}
                animate={{ opacity: 1, rotate: 720, y: 0 }}
                transition={{ duration: 2, ease: 'easeOut' }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                Número Romano: {roman}
              </motion.div>
            )}
            <div className="absolute bottom-2 right-2 flex items-center justify-center">
              <svg className="w-16 h-16 text-teal-600" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12h4l5 27h42l5-27h4l-6 33H7l-6-33z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RomanConverter;
