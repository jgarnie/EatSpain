<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InvoiceEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($order)
    {
        $this->order= $order;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $order= $this->order;
        
        return $this->subject('Your delivery is on his way')
                    ->view('/emails/invoice-email',compact('order'));
    }
}
