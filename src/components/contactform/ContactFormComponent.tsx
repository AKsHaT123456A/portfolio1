import React, { useState } from 'react';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SendIcon } from "../iconpanel/IconPanel";

interface Props {
  setParent: (message: string) => void;
}

const ContactFormComponent: React.FC<Props> = ({ setParent }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  
  const handleChange = (value: string, field: string) => {
    switch (field) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };
  const handleBlur = (value: string, field: string) => {
    switch (field) {
      case 'firstName':
        setParent(`Hi,${value} nice to meet you!`);
        break;
      case 'email':
        setParent("Go you know!Almost 2.7 million emails are sent every second");
        break;
      default:
        break;
    }  };
  return (
    <div className="w-full py-12">
      <div className="container grid max-w-2xl px-4 md:gap-6 md:max-w-3xl md:px-6 lg:gap-10">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Get in touch</h1>
            <p className="text-gray-500 dark:text-gray-400">Fill out the form below to get in touch with me.</p>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => handleChange(e.target.value, 'firstName')}
                  onBlur={() => handleBlur(firstName, 'firstName')} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => handleChange(e.target.value, 'lastName')}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => handleChange(e.target.value, 'email')}
                onBlur={(e) => handleBlur(e.target.value, 'email')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Enter the subject"
                value={subject}
                onChange={(e) => handleChange(e.target.value, 'subject')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => handleChange(e.target.value, 'message')}
              />
            </div>
            <Button className="w-full max-w-xs ml-auto" variant="outline">
              <SendIcon className="mr-2 h-4 w-4" />
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormComponent;
