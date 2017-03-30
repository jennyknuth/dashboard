<img src="./img/instructions/labkit.jpg" style="float: right; margin-bottom: 40px"/>

You will be working through four separate n.io school labs to experience and explore the capabilities of n.io.

* Lab 1: Get Local Weather via SMS Text
* Lab 2: Shake Phone to Control Fan
* Lab 3: SensorTag controls LED Light
* Lab 4: Shake Phone, Start Fan, Measure Windspeed, Light LED

Remember, n.io is a *streaming* platform—everything that happens in n.io happens in real time! When you configure n.io, you are configuring the logic of how real-time data should be processed. We call this real-time data inside of n.io **signals**. Signals can contain as little or as much information as possible.

When n.io is installed and running on a host we call that an **instance**. In the first lab you will use an instance of n.io running in the cloud. This means n.io isn’t running on any physical computer or micro-controller sitting next to you, but rather a virtual host in the AWS cloud. For the next three labs, you will be accessing a n.io instance on the Raspberry Pi micro-controller that came in the kit. Each instance of n.io will have some pre-configured 'services' that we have set up for you to use in conjunction with the services you will configure and make yourself.

Each **service** running in an instance of n.io will transform the data coming from sensors or APIs into useful information that n.io can then use to control other devices. For example, a service could send you important updates or alerts or send changes to a website.

Each service is composed of **blocks**, which are organized just like a workflow. In general, blocks take in signals, transform or manipulate the signal data in some way, and then pass the new signal into the next block in the service. Configuring or building a service means defining which blocks the service should include and how signals should move between the blocks.

n.io is also integrated into this website. This is your personal site, and it is set up to respond to signals from the services you create in real time. You will see your results in action as another demonstration of how n.io can make integrating devices, signals, and human interactions simple. At the top of each page is a streaming visualization that will populate once your n.io services are built.

n.io is an extremely flexible platform that allows for endless levels of configuration. As a result, we would like to stress the importance of correctly configuring the blocks you will use. Feel free to copy and paste the code snippets from this example into your block configurations to ensure exact syntax. Many times, if data isn’t flowing through services as you expect, it's because something wasn’t capitalized correctly or there is a spelling error somewhere in your configurations.
