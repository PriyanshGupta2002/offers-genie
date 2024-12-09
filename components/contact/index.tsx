"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import { envVars } from "@/lib/constants";
import { useIp } from "@/hooks/useIpHook";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";

const formSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First Name must have atleast 2 characters" })
    .max(50),
  lastName: z
    .string()
    .min(2, { message: "First Name must have atleast 2 characters" })
    .max(50),
  subject: z
    .string()
    .min(2, { message: "Subject should have atleast 2 characters" })
    .max(50),
  message: z
    .string()
    .min(2, { message: "Message should have atleast 2 characters" })
    .max(50),
  email: z.string().email({ message: "Email is required" }),
});
const ContactForm = () => {
  const { ip } = useIp();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      subject: "",
    },
  });
  const { isSubmitting } = form.formState;
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { email, firstName, lastName, message, subject } = values;
      const formData = {
        name: `${firstName} ${lastName}`,
        email,
        subject,
        message,
      };
      const config = {
        headers: {
          ip,
        },
      };
      const { data } = await axios.post(
        `${envVars.baseUrl}/getSupport`,
        formData,
        config
      );
      if (data) {
        form.reset();
        return toast({
          title: "Email Successfully Sent",
          description: "We will connect with you shortly",
        });
      }
    } catch (error) {
      console.log("Error while post request to support api", error);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 border-[1.5px]  border-neutralsLightGrey p-6 rounded-md"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-between gap-3 w-full">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutralsDarkGrey">
                  First Name
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your First Name"
                    className="text-sm placeholder:text-neutralsLightGrey "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-neutralsDarkGrey">
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter you Last Name"
                    {...field}
                    className="text-sm placeholder:text-neutralsLightGrey"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutralsDarkGrey">
                Email Address
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your Email Address"
                  {...field}
                  className="text-sm placeholder:text-neutralsLightGrey"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutralsDarkGrey">Subject</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your subject"
                  className="text-sm placeholder:text-neutralsLightGrey"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-neutralsDarkGrey">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Leave us a message"
                  className="resize-none text-sm placeholder:text-neutralsLightGrey"
                  rows={4}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isSubmitting}
          variant={"primary"}
          className="w-full"
          type="submit"
        >
          {isSubmitting ? <Loader className="animate-spin" /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
