using System;

namespace Api.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            this.Message = message ?? GetDefaultMessageForStatusCode(statusCode);
            this.StatusCode = statusCode;

        }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch {
                400 => "A bad request",
                401 => "Unauthorized",
                404 => "Not found",
                500 => "Internal server error",
                _ => null
            };
        }

        public string Message { get; set; }
        public int StatusCode { get; set; }
    }
}