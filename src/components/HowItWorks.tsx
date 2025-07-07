import React from 'react';
import { Card } from '@/components/ui/card';
import { ArrowRight, MessageSquare, Sparkles, Gift } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Three simple steps to find the perfect gift every time. It's really that easy.
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          {/* Step 1 */}
          <Card className="p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 relative overflow-visible">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <div className="absolute left-7 top-20 hidden md:block">
                <MessageSquare className="text-purple-200" size={24} />
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Tell Us About Them</h3>
              <p className="text-muted-foreground mb-2">
                Share details about the person - their interests, age, relationship to you, and the occasion.
              </p>
              <p className="text-sm text-muted-foreground">
                Just a few simple questions and we'll understand exactly what you're looking for.
              </p>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="text-purple-300" size={24} />
            </div>
          </Card>

          {/* Step 2 */}
          <Card className="p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 relative overflow-visible">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <div className="absolute left-7 top-20 hidden md:block">
                <Sparkles className="text-purple-200" size={24} />
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">AI Does the Magic</h3>
              <p className="text-muted-foreground mb-2">
                Our advanced AI analyzes the information and searches through thousands of gift possibilities.
              </p>
              <p className="text-sm text-muted-foreground">
                Powered by machine learning to find the perfect match based on your input.
              </p>
            </div>
            
            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="text-purple-300" size={24} />
            </div>
          </Card>

          {/* Step 3 */}
          <Card className="p-6 md:p-8 flex flex-col md:flex-row items-start gap-6 relative overflow-visible">
            <div className="flex-shrink-0">
              <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center text-white text-xl font-bold">
                3
              </div>
              <div className="absolute left-7 top-20 hidden md:block">
                <Gift className="text-purple-200" size={24} />
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl font-bold mb-2">Get Perfect Suggestions</h3>
              <p className="text-muted-foreground mb-2">
                Receive a curated list of thoughtful, personalized gift ideas tailored just for them.
              </p>
              <p className="text-sm text-muted-foreground">
                Complete with reasons why each gift is perfect and where to find them.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
