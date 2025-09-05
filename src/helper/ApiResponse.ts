import { NextResponse } from 'next/server';

/**
 * Custom API Response class for consistent response formatting
 */
export class ApiResponse {
  statusCode: number;
  data: unknown;
  message: string;
  success: boolean;

  /**
   * Constructor for ApiResponse
   * @param statusCode - HTTP status code
   * @param message - Response message
   * @param data - Response data (optional)
   */
  constructor(statusCode: number, message: string, data: unknown = null) {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }

  /**
   * Convert to NextResponse
   * @returns NextResponse object
   */
  toNextResponse() {
    return NextResponse.json({
      success: this.success,
      message: this.message,
      data: this.data,
    }, { status: this.statusCode });
  }
}