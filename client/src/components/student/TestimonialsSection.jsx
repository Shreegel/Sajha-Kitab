import React from 'react'
import { Typography, Card, Avatar, Rate, Row, Col } from 'antd'
import { assets, dummyTestimonial } from '../../assets/assets'

const { Title, Paragraph, Text } = Typography

const TestimonialsSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <Title level={2} className='text-3xl font-medium text-gray-800' style={{ margin: 0 }}>
        Testimonials
      </Title>
      <Paragraph className='md:text-base text-gray-500 mt-3' style={{ marginBottom: 0 }}>
        Hear from our learners as they share their journeys of transformation, success, and how our <br /> platform has made a difference in their lives.
      </Paragraph>
      <div className='gap-8 mt-14' s
          style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
        }}>
        {dummyTestimonial.map((testimonial, index) => (
          <Card 
            key={index} 
            className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'
            bordered={false}
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <Avatar 
                size={48} 
                src={testimonial.image} 
                alt={testimonial.name}
              />
              <div>
                <Title level={5} className='text-lg font-medium text-gray-800' style={{ margin: 0 }}>
                  {testimonial.name}
                </Title>
                <Text className='text-gray-800/80'>{testimonial.role}</Text>
              </div>
            </div>

            <div className='p-5 pb-7'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img 
                    className='h-5' 
                    key={i} 
                    src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank} 
                    alt="star" 
                  />
                ))}
              </div>
              <Paragraph className='text-gray-500 mt-5' style={{ marginBottom: 0 }}>
                {testimonial.feedback}
              </Paragraph>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read more</a>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default TestimonialsSection