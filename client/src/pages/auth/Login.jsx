import React from 'react'
import { Form, Input, Button } from 'antd'

const Login = () => {
    const [form] = Form.useForm()

    const handleSubmit = (values) => {
        console.log('Form values:', values)
        // Your login logic here
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Form
                form={form}
                onFinish={handleSubmit}
                className="w-full sm:w-87.5 text-center bg-white border border-gray-200 rounded-2xl px-8 shadow-lg"
            >
                <h1 className="text-gray-900 text-3xl mt-10 font-medium">
                    Login
                </h1>

                <p className="text-gray-600 text-sm mt-2">Please sign in to continue</p>

                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email!' }
                    ]}
                    style={{ marginBottom: 0 }}
                >
                    <div className="flex items-center w-full mt-6 bg-gray-50 ring-2 ring-gray-200 focus-within:ring-indigo-500 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                        </svg>
                        <Input
                            type="email"
                            placeholder="Email id"
                            className="w-full bg-transparent text-gray-900 placeholder-gray-400 border-none outline-none"
                            bordered={false}
                            style={{ boxShadow: 'none', padding: 0 }}
                        />
                    </div>
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                    style={{ marginBottom: 0 }}
                >
                    <div className="flex items-center mt-4 w-full bg-gray-50 ring-2 ring-gray-200 focus-within:ring-indigo-500 h-12 rounded-full overflow-hidden pl-6 gap-2 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        <Input.Password
                            placeholder="Password"
                            className="w-full bg-transparent text-gray-900 placeholder-gray-400 border-none outline-none"
                            bordered={false}
                            style={{ boxShadow: 'none', padding: 0 }}
                        />
                    </div>
                </Form.Item>

                <div className="mt-4 text-left">
                    <Button type="link" className="text-sm text-indigo-600 hover:underline p-0 h-auto">
                        Forget password?
                    </Button>
                </div>

                <Button
                    type="primary"
                    htmlType="submit"
                    className="mt-2 w-full h-11 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition"
                    style={{ height: '44px', borderRadius: '9999px' }}
                >
                    Login
                </Button>

                <p className="text-gray-600 text-sm mt-3 mb-11">
                    Don't have an account?
                    <span className="text-indigo-600 hover:underline ml-1 cursor-pointer">Sign up here</span>
                </p>
            </Form>

            {/* Soft Backdrop*/}
            <div className='fixed inset-0 -z-1 pointer-events-none'>
                <div className='absolute left-1/2 top-20 -translate-x-1/2 w-245 h-115 bg-linear-to-tr from-indigo-200/40 to-transparent rounded-full blur-3xl' />
                <div className='absolute right-12 bottom-10 w-105 h-55 bg-linear-to-bl from-indigo-300/40 to-transparent rounded-full blur-2xl' />
            </div>
        </div>
    )
}

export default Login